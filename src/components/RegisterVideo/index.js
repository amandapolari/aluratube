import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

// Custom Hook
function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (evento) => {
      console.log(evento.target);
      const value = evento.target.value;
      const name = evento.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

const PROJECT_URL = "https://wplsdwolmqhqplteeopv.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbHNkd29sbXFocXBsdGVlb3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0NDc1NzEsImV4cCI6MTk4OTAyMzU3MX0.pOuXqDwqigKzI7iSmVjwkBD0bU2G-FcdtQekOMgyMaw";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

// get youtube thumbnail from video url
function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

// Testando:


export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = React.useState(false);
  const formCadastro = useForm({
    initialValues: {
      titulo: "Frost punk",
      url: "https://www.youtube.com/watch?v=QsqatJxAUtk",
    },
  });


  // console.log(supabase);

  /*
    O que precisamos para o form funcionar?
    -> Precisamos pegar os dados que precisam vir do state
        * título
        * URL
    -> Precisamos ter um onSubmit do nosso form
    -> Limpar o formulário após o Submit
    */

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {/* Ternário */}
      {/* Operadores de Curto-circuito */}
      {formVisivel ? (
        <form
          onSubmit={(evento) => {
            evento.preventDefault();
            // console.log(formCadastro.values);

            // Contrato entre o nosso Front e o BackEnd

            supabase
              .from("video")
              .insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: "jogos",
              })
              .select()
              .then((resposta) => console.log(resposta))
              .catch((err) => console.log(err));

            setFormVisivel(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>
            <input
              placeholder="Titulo do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}

// [x] Falta do botão para adicionar
// [x] Modal
// [x] Precisamos controlar o state
// -> Formulário em si
