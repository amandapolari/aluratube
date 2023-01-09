import React from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = React.useState(false);
  const [values, setvalues] = React.useState({titulo: "", url: "" });

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
        <form onSubmit={(evento) => {
            evento.preventDefault();
            console.log(values);
        }}>
          <div>
            <button
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>
            <input
              placeholder="Título do Vídeo"
              value={values.titulo}
              onChange={(evento) => {
                const value = evento.target.value;
                console.log(value);
                setvalues({
                  ...values,
                  titulo: value,
                });
              }}
            />
            <input
              placeholder="URL"
              value={values.url}
              onChange={(evento) => {
                const value = evento.target.value;
                console.log(value);
                setvalues({
                  ...values,
                  url: value,
                });
              }}
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
