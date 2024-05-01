import {API} from '../../assets/api/api';
import {CharacterType} from '../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {CharacterCard} from '../../components/Card/CharacterCard/CharacterCard';
import {getLayout} from '../../components/Layout/BaseLayout/BaseLayout';
import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import s from '../../styles/styles.module.css'

export const getStaticPaths: GetStaticPaths = async () => {
    const {results} = await API.rickAndMorty.getCharacters()

    const paths = results.map(character => ({
        params: {id: String(character.id)}
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params || {}

    const character = await API.rickAndMorty.getCharacter(id as string)

    if (!character) {
        return { notFound: true }
    }

    return {
        props: { character }
    }
}

type PropsType = {
    character: CharacterType
}

const Character = (props: PropsType) => {
    const {character} = props

    const router = useRouter()

    if (router.isFallback) return <h1>Loading...</h1>

    const characterId = router.query.id

    const goToCharacters = () => router.push('/characters')

    return (
        <PageWrapper>
            <div className={s.container}>
                <div className={s.text}>ID: {characterId}</div>
                <CharacterCard key={character.id} character={character}/>
                <button className={s.button} onClick={goToCharacters}>GO TO CHARACTERS</button>
            </div>
        </PageWrapper>
    )
}

Character.getLayout = getLayout
export default Character
