'use client'

import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {Card} from '../../components/Card/Card';
import {getLayout} from '../../components/Layout/BaseLayout/BaseLayout';
import {useEffect, useState} from 'react';
import {API} from '../../assets/api/api';
import {LocationType} from '../../assets/api/rick-and-morty-api';
import {Nullable} from '@/types/Nullable';

const Locations = () => {
    const [locations, setLocations] = useState<Nullable<LocationType[]>>(null)

    useEffect(() => {
        API.rickAndMorty.getLocations().then(res => setLocations(res.results))
    }, [])

    if (!locations) return null

    const locationsList = locations.map(location => (
        <Card key={location.id} name={location.name}/>
    ))

    return (
        <PageWrapper>
            {locationsList}
        </PageWrapper>
    )
}

export default Locations