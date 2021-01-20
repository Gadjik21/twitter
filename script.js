const arr = [{
    "userName": "Олег Васильевич",
    "nickname": "vasil",
    "text": "Где детонатор?",
    "postDate": "02.14.2012, 05:00"
  },
  {
    "userName": "Brock",
    "nickname": "brock",
    "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
    "postDate": "02.05.2012, 13:27",
    "img": "https://fish-text.ru/images/logo.png",
    "likes": 50
  },
  {
    "userName": "Raamin",
    "nickname": "raamin",
    "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
    "postDate": "03.11.2012, 10:30",
    "likes": 999
  },
  {
    "userName": "Дональд",
    "nickname": "trampampam",
    "text": "Зарегался на вк, хороший сервис и не банят",
    "postDate": "02.05.2012, 13:27",
    "img": "https://i2.wp.com/media.globalnews.ca/videostatic/news/vamt80qbaq-94ovmaxjqg/trumptwitterupdate.jpg?w=500&quality=70&strip=all",
    "likes": 50

  },
  {
    "userName": "Олег Васильевич",
    "nickname": "vasil",
    "text": "Где детонатор?",
    "postDate": "02.14.2012, 05:00",
    "img": "https://www.meme-arsenal.com/memes/27606cb09d10f670389750cffb4d900d.jpg",
    "likes": 666
  },
  {
    "userName": "Raamin",
    "nickname": "raamin",
    "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
    "postDate": "03.11.2012, 10:30",
    "likes": 999
  }
];

class Twitter {
  constructor({
    listElem
  }) {
    this.tweets = new Posts();
    this.elements = {
      listElem: document.querySelector(listElem)
    };
  }

  renderPosts() {}

  // Открываются наши посты
  showUserPost() {}
  // Просмотр постов которые я лайкнул 
  showLikesPost() {}
  // Открытие модального окна
  openModal() {}
}

class Posts {
  // Извлекаем пост, если его нет он будет пустым то это объект
  constructor({
    posts = arr
  } = {}) {
    this.posts = posts;
  }
  // Добавление поста
  addPost(tweet) {
    const post = new Post(tweet);
    this.posts.push(post);
  }
  // Удаление поста
  deletePost(id) {}

  // Лайкнуть пост
  likePost(id) {}
}

class Post {

  constructor(param) {
    this.id = param.id;
    this.userName = param.userName;
    this.nickName = param.nickName;
    this.postData = param.postDate;
    this.text = param.text;
    this.img = param.img;
    this.likes = param.likes;
    this.liked = false;
  }

  // Обновляет лайки
  changeLike() {
    this.liked = !this.liked;
    if (this.liked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}

const twitter = new Twitter({
  listElem: '.tweet-list'
});

// Добавляем пост в arr
twitter.tweets.addPost({
  id: 4152346,
  userName: 'anton',
  nickName: 'squarple',
  postDate: '21/01/2021',
  text: "sfwsfw",
  img: '',
  likes: 50,
  liked: true,
});

console.log('twitter: ',
  twitter);