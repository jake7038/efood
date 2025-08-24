import * as S from "./styles"

const Tag = ({ tag }: { tag: string }) => {
    return(
        <S.retangulo>
            <p>{tag}</p>
        </S.retangulo>
    )
}


export const Item = ({foto}: {foto: string}, {nome}: {nome: string}, {texto}: {texto: string}, {classificacao}: {classificacao: string}, {tags}: {tags: string[]}) => {
    return(
        <S.Div>
            <S.DivImg>
                {tags.map((tag, index) => (
                    <Tag tag={tag} />
                ))}
            </S.DivImg>
            <div>
                <div>
                    {nome} <div> {classificacao}</div>
                </div>
                <p>
                    {texto}
                </p>
                <button>Saiba Mais</button>
            </div>
        </S.Div>
    )
}