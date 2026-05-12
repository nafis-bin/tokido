export type ArtistProfile = {
    artist: string,
    imgSrc: string,
    change: string,
    sold: number,
    volume: number
}

export type Clock = {
    hours: string,
    minutes: string,
    seconds: string,
}

export type Art = {
    imgSrc: string,
    artist: string,
    artistIcon: string,
    title: string,
    price: number,
    bid: number
}

export type MarketPlaceTab = 'NFTs' | 'Collections'

export function parseDeadline(deadline: number): Clock {
    const now = Date.now()
    const diffMili = deadline - now

    if (diffMili <= 0) throw new Error('Deadline expired!!!')

    const hours = String(Math.floor(diffMili / (1000 * 60 * 60))).padStart(2, '0')

    const minutes = String(
        Math.floor((diffMili % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, '0')

    const seconds = String(
        Math.floor((diffMili % (1000 * 60)) / 1000)
    ).padStart(2, '0')

    return { hours, minutes, seconds }
}

