import React from "react";
import { StyledRegisterVideo } from "./styles";

// Custom Hook
function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (evento) => {
      console.log(evento.target);
      const value = evento.target.value;
      const name = evento.target.name;
      console.log(evento.target.name);
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

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: "Frost punk", url: "https://youtube.." },
  });
  const [formVisivel, setFormVisivel] = React.useState(false);

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
      {/* No JavaScript se usa muito: */}
      {/* Ternário e Operadores de Curto-circuito */}
      {formVisivel ? (
        <form
          onSubmit={(evento) => {
            evento.preventDefault();
            console.log(formCadastro.values);
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
              placeholder="Título do Vídeo"
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
