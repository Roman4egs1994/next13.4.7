import {PageWrapper} from 'components/PageWrapper/PageWrapper';
import {Card} from 'components/Card/Card';
import {EpisodeType, ResponseType} from "assets/api/rick-and-morty-api";

import {notFound} from "next/navigation";
import {instanceRick} from "assets/api/instances";

const getEpisodes = async (): Promise<ResponseType<EpisodeType>> => {
    const res = await fetch(`https://rickandmortyapi.com/api/episode`)
    console.log('res',res)
    return await res.json()
}

export default async function Episodes() {

    const {results} = await getEpisodes()

    if(!results) {
        notFound()
    }

    const episodesList = results.map(episode => (
        <Card key={episode.id} name={episode.name}/>
    ))

    return (
        <PageWrapper>
            {episodesList}
        </PageWrapper>
    )
}

