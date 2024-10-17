import type { Book } from '@/models/BookModel'

export const books: Book[] = [
  {
    id: 1,
    title: 'El Camino de los Reyes',
    author: 'Brandon Sanderson',
    series: 'El Archivo de las Tormentas',
    numberInSeries: 1,
    price: 45,
    coverImg:
      'https://assets.lectulandia.com/b/ab/Brandon%20Sanderson/El%20camino%20de%20los%20reyes%20(13)/small.jpg',
    featured: true,
    featuredImg:
      'https://cdn.shopify.com/s/files/1/0266/6633/6336/files/WoK_cover_600x600.webp?v=1724937764',
    description:
      'Una épica aventura que marca el inicio de una saga legendaria, llena de magia, honor y héroes inesperados.',
    rating: 4.5,
    publisher: 'Tor Books',
  },
  {
    id: 2,
    title: 'Palabras Radiantes',
    author: 'Brandon Sanderson',
    series: 'El Archivo de las Tormentas',
    numberInSeries: 2,
    price: 50,
    coverImg:
      'https://assets.lectulandia.com/b/ab/Brandon%20Sanderson/Palabras%20radiantes%20(7)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'Kaladin continúa su lucha por la justicia en un mundo lleno de tormentas, traiciones y poderes antiguos que resurgen.',
    rating: 4.8,
    publisher: 'Tor Books',
  },
  {
    id: 3,
    title: 'Juramentada',
    author: 'Brandon Sanderson',
    series: 'El Archivo de las Tormentas',
    numberInSeries: 3,
    price: 55,
    coverImg:
      'https://assets.lectulandia.com/b/ab/Brandon%20Sanderson/Juramentada%20(24)/small.jpg',
    featured: true,
    featuredImg:
      'https://cosmere.es/wp-content/uploads/2017/08/7-oathbringer_cover-OB-WIP-1-1.png',
    description:
      'Honor ha muerto, pero los héroes aún luchan por mantener la esperanza viva en un mundo al borde del abismo.',
    rating: 5,
    publisher: 'Tor Books',
  },
  {
    id: 4,
    title: 'El Ritmo de la Guerra',
    author: 'Brandon Sanderson',
    series: 'El Archivo de las Tormentas',
    numberInSeries: 4,
    price: 60,
    coverImg:
      'https://assets.lectulandia.com/b/ab/Brandon%20Sanderson/El%20Ritmo%20de%20la%20Guerra%20(28)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'La batalla por Roshar se intensifica, y los protagonistas deben tomar decisiones difíciles para salvar su mundo.',
    rating: 4.9,
    publisher: 'Tor Books',
  },
  {
    id: 5,
    title: 'Harry Potter y la Piedra Filosofal',
    author: 'J.K. Rowling',
    series: 'Harry Potter',
    numberInSeries: 1,
    price: 20,
    coverImg:
      'https://assets.lectulandia.com/b/J.%20K.%20Rowling/Harry%20Potter%20y%20la%20piedra%20filosofal%20(4693)/small.jpg',
    featured: true,
    featuredImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpVPZiutHUpxudm0fKgXefKv7qXJia0-RNg&s',
    description:
      'El niño que sobrevivió comienza su viaje en el mundo de la magia, descubriendo secretos y amistades inolvidables.',
    rating: 4.5,
    publisher: 'Bloomsbury',
  },
  {
    id: 6,
    title: 'Harry Potter y la Cámara Secreta',
    author: 'J.K. Rowling',
    series: 'Harry Potter',
    numberInSeries: 2,
    price: 22,
    coverImg:
      'https://assets.lectulandia.com/b/J.%20K.%20Rowling/Harry%20Potter%20y%20la%20camara%20secreta%20(4)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'Misterios oscuros acechan en Hogwarts, y Harry debe enfrentarse a un peligro que nadie ve venir.',
    rating: 4.2,
    publisher: 'Bloomsbury',
  },
  {
    id: 7,
    title: 'Harry Potter y el Prisionero de Azkaban',
    author: 'J.K. Rowling',
    series: 'Harry Potter',
    numberInSeries: 3,
    price: 25,
    coverImg:
      'https://assets.lectulandia.com/b/J.%20K.%20Rowling/Harry%20Potter%20y%20el%20prisionero%20de%20Azkaban%20(2)/small.jpg',
    featured: true,
    featuredImg:
      'https://i.pinimg.com/originals/15/83/30/1583303cffb3e0b9a87ec82d2e01b964.jpg',
    description:
      'Un peligroso prisionero ha escapado de Azkaban, y Harry se ve envuelto en una intriga que pondrá su vida en riesgo.',
    rating: 5,
    publisher: 'Bloomsbury',
  },
  {
    id: 8,
    title: 'Harry Potter y el Cáliz de Fuego',
    author: 'J.K. Rowling',
    series: 'Harry Potter',
    numberInSeries: 4,
    price: 28,
    coverImg:
      'https://assets.lectulandia.com/b/J.%20K.%20Rowling/Harry%20Potter%20y%20el%20caliz%20de%20fuego%20(3)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'Harry enfrenta desafíos mortales en el Torneo de los Tres Magos, mientras una oscura amenaza emerge.',
    rating: 4.8,
    publisher: 'Bloomsbury',
  },
  {
    id: 9,
    title: 'La Comunidad del Anillo',
    author: 'J.R.R. Tolkien',
    series: 'El Señor de los Anillos',
    numberInSeries: 1,
    price: 35,
    coverImg:
      'https://assets.lectulandia.com/b/J.%20R.%20R.%20Tolkien/La%20comunidad%20del%20anillo%20(3812)/small.jpg',
    featured: true,
    featuredImg:
      'https://media.moddb.com/cache/images/groups/1/2/1488/thumb_620x2000/the-lord-of-the-rings-wallpaper3.jpg',
    description:
      'Un hobbit inicia una misión peligrosa para destruir el Anillo Único y salvar la Tierra Media de la oscuridad.',
    rating: 4.9,
    publisher: 'Allen & Unwin',
  },
  {
    id: 10,
    title: 'Las Dos Torres',
    author: 'J.R.R. Tolkien',
    series: 'El Señor de los Anillos',
    numberInSeries: 2,
    price: 40,
    coverImg:
      'https://assets.lectulandia.com/b/J.%20R.%20R.%20Tolkien/Las%20dos%20torres%20(3880)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'La comunidad está rota, pero la esperanza perdura mientras los amigos enfrentan grandes peligros por separado.',
    rating: 4.9,
    publisher: 'Allen & Unwin',
  },
  {
    id: 11,
    title: 'El Retorno del Rey',
    author: 'J.R.R. Tolkien',
    series: 'El Señor de los Anillos',
    numberInSeries: 3,
    price: 45,
    coverImg:
      'https://assets.lectulandia.com/b/J.%20R.%20R.%20Tolkien/El%20retorno%20del%20rey%20(4140)/small.jpg',
    featured: true,
    featuredImg:
      'https://m.media-amazon.com/images/M/MV5BNTllYWJmZGYtN2I1OC00NGVlLTk1MzEtMWU5NjQ0MGY1NTY0XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_QL75_UX500_CR0,0,500,281_.jpg',
    description:
      'La batalla final por la Tierra Media ha comenzado, y los héroes deben luchar por su futuro y la libertad.',
    rating: 5,
    publisher: 'Allen & Unwin',
  },
  {
    id: 12,
    title: 'El Nombre del Viento',
    author: 'Patrick Rothfuss',
    series: 'Crónicas del Asesino de Reyes',
    numberInSeries: 1,
    price: 30,
    coverImg:
      'https://assets.lectulandia.com/b/Patrick%20Rothfuss/El%20nombre%20del%20viento%20(4090)/small.jpg',
    featured: true,
    featuredImg:
      'https://steamuserimages-a.akamaihd.net/ugc/863978552603437062/B063E2F7F19B6B164772D75F0E285480EB7DB0FA/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    description:
      'Un joven con un talento extraordinario cuenta su historia, desde sus humildes orígenes hasta su ascenso a la leyenda.',
    rating: 4.2,
    publisher: 'DAW Books',
  },
  {
    id: 13,
    title: 'El Temor de un Hombre Sabio',
    author: 'Patrick Rothfuss',
    series: 'Crónicas del Asesino de Reyes',
    numberInSeries: 2,
    price: 35,
    coverImg:
      'https://assets.lectulandia.com/b/Patrick%20Rothfuss/El%20temor%20de%20un%20hombre%20sabio%20(1565)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'Kvothe sigue enfrentando grandes peligros mientras busca respuestas sobre su pasado y el misterioso enemigo que acecha.',
    rating: 3.2,
    publisher: 'DAW Books',
  },
  {
    id: 14,
    title: 'El Imperio Final',
    author: 'Brandon Sanderson',
    series: 'Nacidos de la Bruma',
    numberInSeries: 1,
    price: 25,
    coverImg:
      'https://assets.lectulandia.com/b/ab/Brandon%20Sanderson/El%20Imperio%20Final%20Ed%20revisada%20(20)/small.jpg',
    featured: true,
    featuredImg:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/https://danielhsepulveda.com/wp-content/uploads/2022/03/mistbornfinalempire-standard-copy.jpg',
    description:
      'Un grupo de rebeldes trama derrocar a un emperador inmortal en un mundo donde la magia es usada por pocos privilegiados.',
    rating: 4.9,
    publisher: 'Tor Books',
  },
  {
    id: 15,
    title: 'El Pozo de la Ascensión',
    author: 'Brandon Sanderson',
    series: 'Nacidos de la Bruma',
    numberInSeries: 2,
    price: 28,
    coverImg:
      'https://assets.lectulandia.com/b/ab/Brandon%20Sanderson/El%20Pozo%20de%20la%20Ascension%20Ed%20revisada%20(19)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'El imperio está en caos y una amenaza mayor se avecina, mientras los héroes buscan salvar su mundo.',
    rating: 4.9,
    publisher: 'Tor Books',
  },
  {
    id: 16,
    title: 'El Héroe de las Eras',
    author: 'Brandon Sanderson',
    series: 'Nacidos de la Bruma',
    numberInSeries: 3,
    price: 30,
    coverImg:
      'https://assets.lectulandia.com/b/ab/Brandon%20Sanderson/El%20Heroe%20de%20las%20Eras%20Ed%20revisada%20(18)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'Una última y desesperada misión es emprendida para salvar el mundo, cuando todo parece estar perdido.',
    rating: 4.9,
    publisher: 'Tor Books',
  },
  {
    id: 17,
    title: 'Harry Potter y la Orden del Fénix',
    author: 'J.K. Rowling',
    series: 'Harry Potter',
    numberInSeries: 5,
    price: 30,
    coverImg:
      'https://assets.lectulandia.com/b/J.%20K.%20Rowling/Harry%20Potter%20y%20la%20orden%20del%20fenix%20(394)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'Las fuerzas oscuras están en ascenso, y Harry debe prepararse para enfrentar la amenaza creciente de Voldemort.',
    rating: 3.9,
    publisher: 'Bloomsbury',
  },
  {
    id: 18,
    title: 'El Hobbit',
    author: 'J.R.R. Tolkien',
    series: 'El Señor de los Anillos',
    numberInSeries: 0,
    price: 25,
    coverImg:
      'https://assets.lectulandia.com/b/ab/J%20R%20R%20Tolkien/El%20Hobbit%20ilustrado%20por%20Jemima%20Catlin%20(29)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'Un hobbit emprende un viaje con un grupo de enanos para recuperar un tesoro y salvar su hogar.',
    rating: 4,
    publisher: 'Allen & Unwin',
  },
  {
    id: 19,
    title: 'Harry Potter and the Half-Blood Prince',
    author: 'J.K. Rowling',
    series: 'Harry Potter',
    numberInSeries: 6,
    price: 30,
    coverImg:
      'https://assets.lectulandia.com/b/J.%20K.%20Rowling/Harry%20Potter%20y%20el%20misterio%20del%20principe%20(395)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'Los secretos del senor oscuro son revelados pero a un costo muy alto',
    rating: 4.7,
    publisher: 'Bloomsbury',
  },
  {
    id: 20,
    title: 'Harry Potter y las Reliquias de la Muerte',
    author: 'J.K. Rowling',
    series: 'Harry Potter',
    numberInSeries: 7,
    price: 35,
    coverImg:
      'https://assets.lectulandia.com/b/J.%20K.%20Rowling/Harry%20Potter%20y%20las%20reliquias%20de%20la%20muert%20(396)/small.jpg',
    featured: false,
    featuredImg: '',
    description:
      'Empieza la battalla final contra el ascenso del senor tenebroso. Harry y sus amigos buscan la manera de derrotarlo',
    rating: 5,
    publisher: 'Bloomsbury',
  },
]
