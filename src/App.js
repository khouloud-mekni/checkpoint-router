import {useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ListMovie from './components/ListMovie/ListMovie';
import MyNav from './components/MyNav/MyNav';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  const [movies,setMovies]=useState([
    {
      id: uuidv4(),
      title: "Game of thrones",
      posterUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
      rating: 3,
      description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      trailer: "https://www.youtube.com/embed/Sws4Ti_HROw"
    },
    {
      id: uuidv4(),
      title: "The good doctor",
      posterUrl: "https://i.pinimg.com/564x/b1/40/bf/b140bffdf2287411905bc4eb1df545c7.jpg",
      rating: 2,
      description: "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
      trailer: "https://www.youtube.com/embed/lnY9FWUTY84"
    },
    {
      id: uuidv4(),
      title: "Breaking bad",
      posterUrl: "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      rating: 5,
      description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      trailer: "https://www.youtube.com/embed/1JLUn2DFW4w"
    },
    {
      id: uuidv4(),
      title: "Prison Break",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/54/Prison-break-season-4-dvd.jpg",
      rating: 1,
      description: "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
      trailer: "https://www.youtube.com/embed/AL9zLctDJaU"
    },
    {
      id: uuidv4(),
      title: "Gangs of London",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BOGJlZTE0MTQtZDdmMS00YWViLThlMDktYzk1N2RhMjY0NGEyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
      rating: 2,
      description: "Tells the story of London being torn apart by the turbulent power struggles of its international gangs and the sudden power vacuum that's created when the head of London's most powerful crime family is assassinated.",
      trailer: "https://www.youtube.com/embed/VoJ_yZqhmAg"
    },
    {
      id: uuidv4(),
      title: "Taboo",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81BbPS82fnL._AC_SL1500_.jpg",
      rating: 4,
      description:
        "Adventurer James Keziah Delaney returns to London during the War of 1812 to rebuild his late father's shipping empire. However, both the government and his biggest competitor want his inheritance at any cost - even murder.",
      trailer: "https://www.youtube.com/embed/W1fiijqrKuc"
    },

    {
      id: uuidv4(),
      title: "Dexter",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81JKXT1j0OL._SL1500_.jpg",
      rating: 3,
      description:
        "By day, mild-mannered Dexter is a blood-spatter analyst for the Miami police. But at night, he is a serial killer who only targets other murderers.",
      trailer: "https://www.youtube.com/embed/YQeUmSD1c3g"
    },
    {
      id: uuidv4(),
      title: "Black Sails",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BZmExNzU1M2YtNGUzOC00MmM0LWEwYzYtZWJiYjYxNDcwY2E0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
      rating: 1,
      description:
        "Follows Captain Flint and his pirates twenty years prior to Robert Louis Stevenson's classic novel Treasure Island",
      trailer: "https://www.youtube.com/embed/rT2Y5jjBNpQ"
    },
    {
      id: uuidv4(),
      title: "Black List",
      posterUrl: "https://i.pinimg.com/564x/ba/8f/fa/ba8ffaf54d9990f58aacf71c258de835.jpg",
      rating: 2,
      description:
        "A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.",
      trailer: "https://www.youtube.com/embed/-WYdUaK54fU"
    },
    {
      id: uuidv4(),
      title: "The Walking deads",
      posterUrl: "https://fr.web.img2.acsta.net/c_216_288/medias/nmedia/18/78/35/82/20303823.jpg",
      rating: 5,
      description: "Series overview. The Walking Dead takes place after the onset of a worldwide zombie apocalypse. The zombies, colloquially referred to as walkers, shamble towards living humans and other creatures to eat them; they are attracted to noise, such as gunshots, and to different scents, e.g. humans",
      trailer: "https://www.youtube.com/embed/sfAc2U20uyg"
    },

    {
      id: uuidv4(),
      title: "çukur",
      posterUrl: "https://imgr.cineserie.com/2018/10/1129749.jpg?imgeng=/f_jpg/cmpr_0/w_744/h_1200/m_cropbox&ver=1",
      rating: 5,
      description: "A dangerous neighborhood, The Pit, ran by a noble mafia family called Koçovars. When the family is in the danger of losing the control of The Pit, their youngest son now must come back to his home, where he could never escape from.",
      trailer: "https://www.youtube.com/embed/g3GoD22e5gM"
    }
  ])
  
  const [filtredMovie , setFiltredMovie] = useState(movies)

  const [search , setSearch]= useState("")
 const [stars, setStars]=useState(0)

 
 useEffect(()=>{
  setFiltredMovie(movies.filter((movie)=>{
    return movie.title.toLowerCase().includes(search.toLowerCase()) && movie.rating >= stars 
  }
))
},[search,stars,movies])

  return (


    <div className="App">
    <MyNav  stars={stars} setStars={setStars} movies={movies} setMovies={setMovies}  search={search} setSearch={setSearch} />
    
    <Routes>
    <Route path='/' element={<ListMovie filtredMovie={filtredMovie}/>}/>
    <Route path='/details/:id' element={<MovieDetails  filtredMovie={filtredMovie}  />}/>

    </Routes>
   
    </div>
  );
}

export default App;
