import { useEffect, useRef } from "react"
import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
        
    }
`
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;

    }
`

const Imagen = styled.img`
    display: block;
    width: 150px;
`


const Resultado = ({ resultado }) => {

    const container = useRef(null);
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado

    useEffect(() => {
        if (container.current) {
            container.current.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }, [resultado]);

  return (
    <Contenedor ref={container}>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Crypto" />
        <div>
            <Precio>El precio es de:{' '}
                <span>{PRICE}</span>
            </Precio>
            <Texto>El precio mas alto del dia:{' '}
                <span>{HIGHDAY}</span>
            </Texto>
            <Texto>El precio mas bajo del dia:{' '}
                <span>{LOWDAY}</span>
            </Texto>
            <Texto>Variacion ultimas 24H:{' '}
                <span>{CHANGEPCT24HOUR}</span>
            </Texto>
            <Texto>Ultima actualizacion:{' '}
                <span>{LASTUPDATE}</span>
            </Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado