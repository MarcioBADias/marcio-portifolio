import React from 'react'

import { BiMailSend, BiMap, BiPhoneCall } from 'react-icons/bi'

import * as C from './style'

const Form = () => {
  /* const [sendMessage, setSendMessage] = useState(false);
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const [isValidName, setIsValidName] = useState(true);
    const [isValidMail, setIsValidMail] = useState(true);
    const [isValidMessage, setIsValidMessage] = useState(true);

    const validName = /^[a-zA-ZÀ-ÿ]+([\s][a-zA-ZÀ-ÿ]+)*$/;
    const validMail = /^[^\s@]+@[^\s@]+[^\s@]+$/;
    const validMessage = /^[\s\S]+$/;

    const handleSubmit = e => {
        e.preventDefault()

        if(name === ''|| mail === '' || message === ''){
            name !== validName && setIsValidName(false);
            mail !== validMail && setIsValidMail(false);
            message !== validMessage && setIsValidMessage(false);
            return;
        }
    }
     */

  return (
    <C.Section id="contact">
      <C.SocialArea>
        <C.SquareArea>
          <C.Square
            style={{
              top: 90,
              left: 110,
              minWidth: 380,
            }}
          >
            <p style={{ fontSize: 15 }}>
              Se houver qualquer dúvida ou quiser discutir um projeto, não
              hesite em entrar em contato. Estou sempre disponível para
              responder por e-mail, ligações ou mensagem direta do site. Fico
              ansioso para ouvir você em breve!
            </p>
          </C.Square>
          <C.Square
            style={{
              top: 90,
              left: 510,
              maxWidth: 150,
            }}
          >
            <BiPhoneCall
              style={{
                height: 50,
                marginLeft: 30,
                width: 50,
              }}
            />
            <p style={{ textAlign: 'center' }}>Telefone:</p>
            <p
              style={{ textAlign: 'center', fontSize: 12, fontWeight: 'bold' }}
            >
              (22) 99942-4224
            </p>
          </C.Square>
          <C.Square
            style={{
              top: 230,
              left: 110,
              minWidth: 380,
            }}
          >
            <BiMailSend
              style={{
                height: 50,
                marginLeft: 150,
                width: 50,
              }}
            />
            <p style={{ textAlign: 'center', fontSize: 12 }}>
              E-mail de contato:
            </p>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
              marcius.dev.estudos@gmail.com
            </p>
          </C.Square>
          <C.Square
            style={{
              top: 230,
              left: 510,
              maxWidth: 150,
            }}
          >
            <BiMap
              style={{
                height: 40,
                marginLeft: 40,
                width: 40,
              }}
            />
            <p style={{ textAlign: 'center', fontSize: 12 }}>Endereço:</p>
            <p
              style={{ textAlign: 'center', fontSize: 12, fontWeight: 'bold' }}
            >
              Cabo Frio/RJ
            </p>
          </C.Square>
        </C.SquareArea>
      </C.SocialArea>
      <C.FormArea>
        <C.Form
          action="https://formsubmit.co/marcius.dev.estudos@gmail.com"
          method="POST"
        >
          <C.Title>Entre em contato:</C.Title>
          <input
            type="hidden"
            name="_next"
            value="https://marcio-portifolio.netlify.app/"
          />
          <C.InputLarge name="name" type="text" placeholder="Nome Completo" />

          {/* {!isValidName && <span style={{color:'red',marginLeft:60, marginTop:-15, fontSize:12}}>
                        Insira um nome válido no campo acima.
                    </span>} */}

          <C.InputLarge
            name="email"
            type="email"
            placeholder="E-mail de contato"
          />

          {/* {!isValidMail && <span style={{color:'red',marginLeft:60, marginTop:-15, marginBottom:10, fontSize:12}}>
                        Insira um e-mail válido no campo acima.
                    </span>} */}

          <C.InputTextBox name="message" placeholder="Digite sua menssagem" />
          {/* {!isValidMessage && <span style={{color:'red',marginLeft:60, marginTop:5, fontSize:12}}>
                        Insira uma menssagem no campo acima.
                    </span>} */}
          <C.Button type="submit">Enviar</C.Button>
        </C.Form>
      </C.FormArea>
    </C.Section>
  )
}

export default Form
