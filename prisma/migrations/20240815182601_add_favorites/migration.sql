-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_movie_fkey" FOREIGN KEY ("item_id") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_anime_fkey" FOREIGN KEY ("item_id") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_manga_fkey" FOREIGN KEY ("item_id") REFERENCES "Manga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_series_fkey" FOREIGN KEY ("item_id") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_book_fkey" FOREIGN KEY ("item_id") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
