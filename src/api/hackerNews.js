class HackerNews {  
  
  static getArticles() {
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getArticleById(id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default HackerNews;  