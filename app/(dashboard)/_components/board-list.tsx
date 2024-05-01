"use clinet"

import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

import { EmptySearch } from "./empty-search"
import { EmptyFavorites } from "./empty-favorites"
import { EmptyBoards } from "./empty-boards"
import { BoardCard } from "./board-cards/inedx"
import { NewBoardButton } from "./new-board-button"

interface BoardListProps {
    orgId: string,
    query: {
        search?: string,
        favorites?: string
    }
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
    const data = useQuery(api.boards.get, { orgId, ...query })

    if (data === undefined) {
        return (
            <>
                <h2 className="text-2xl font-semibold mt-6">{query.favorites ? "Favorites boards" : "Boards"}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 xl:grid-cols-5 2xl:grid-cols-6 mt-6 pb-10">
                    <NewBoardButton orgId={orgId} disabled />
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                </div></>

        )
    }

    if (!data?.length && query.search) {
        console.log(!data?.length && query.search)
        return (
            <EmptySearch />
        )
    }

    if (!data?.length && query.favorites) {
        return (
            <EmptyFavorites />
        )
    }

    if (!data?.length) {
        return (
            <EmptyBoards />
        )
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mt-6">{query.favorites ? "Favorites boards" : "Boards"}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 xl:grid-cols-5 2xl:grid-cols-6 mt-6 pb-10">
                <NewBoardButton orgId={orgId} />
                {data?.map((board) =>
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        authorName={board.authorName}
                        createdAt={board._creationTime}
                        orgId={board.orgId}
                        isFavorite={board.isFavorite}
                    />)}
            </div>
        </div>

    )


}