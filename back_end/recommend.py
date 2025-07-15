import pickle
import pandas as pd
import numpy as np
import sys
import json

# Load pickled files
similarity_scores = pickle.load(open('similarity_scores.pkl', 'rb'))
books = pickle.load(open('books.pkl', 'rb'))
pt = pickle.load(open('pt.pkl', 'rb'))

def recommend(book_name):
    try:
        index = np.where(pt.index == book_name)[0][0]
    except IndexError:
        return [{"error": "Book not found"}]

    similar_items = sorted(
        list(enumerate(similarity_scores[index])),
        key=lambda x: x[1],
        reverse=True
    )[1:6]

    data = []
    for i in similar_items:
        temp_df = books[books['Book-Title'] == pt.index[i[0]]].drop_duplicates('Book-Title')
        book_info = {
            'title': temp_df['Book-Title'].values[0],
            'author': temp_df['Book-Author'].values[0],
            'image': temp_df['Image-URL-M'].values[0]
        }
        data.append(book_info)

    return data

if __name__ == "__main__":
    book_input = sys.argv[1]
    recommendations = recommend(book_input)
    print(json.dumps(recommendations))