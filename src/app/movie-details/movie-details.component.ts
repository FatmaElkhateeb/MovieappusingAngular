import { Component, OnInit } from '@angular/core';
 import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
id:any;
  movies:Array<any>=[{
    "id": 1,
    "original_language": "en",
    "overview": "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
    "popularity": 4213.261,
    "poster_path": "https://image.tmdb.org/t/p/w342/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
    "release_date": "2021-02-11",
    "title": "Tom & Jerry",
    "vote_average": 8,
    "vote_count": 581
  },
  {
    "id": 2,
    "original_language": "en",
    "overview": "An evil sorceress transports the gang back to the age of chivalrous knights, spell-casting wizards, and fire-breathing dragons.",
    "popularity": 839.678,
    "poster_path": "https://image.tmdb.org/t/p/w342/sCoG0ibohbPrnyomtzegSuBL40L.jpg",
    "release_date": "2021-02-22",
    "title": "Scooby-Doo! The Sword and the Scoob",
    "vote_average": 7.5,
    "vote_count": 16
  },
  {
    "id": 3,
    "original_language": "en",
    "overview": "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
    "popularity": 839.678,
    "poster_path": "https://image.tmdb.org/t/p/w342/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
    "release_date": "2021-02-22",
    "title": "Soul",
    "vote_average":8.3,
    "vote_count": 5000
  },
  {
    "id": 4,
    "original_language": "en",
    "overview": "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
    "popularity": 839.678,
    "poster_path": "https://image.tmdb.org/t/p/w342/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
    "release_date": "2021-02-20",
    "title": "Raya and the Last Dragon",
    "vote_average": 8.1,
    "vote_count": 27
  },
  {
    "id": 5,
    "original_language": "en",
    "overview": "The previously untold origins of Olaf, the innocent and insightful, summer-loving snowman are revealed as we follow Olaf’s first steps as he comes to life and searches for his identity in the snowy mountains outside Arendelle.",
    "popularity": 839.678,
    "poster_path": "https://image.tmdb.org/t/p/w342/hddzYJtfYYeMDOQVcH58n8m1W3A.jpg",
    "release_date": "2020-10-23",
    "title": "Once Upon a Snowman",
    "vote_average": 6.8,
    "vote_count": 27
  },
  {
    "id": 6,
    "original_language": "en",
    "overview": "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
    "popularity": 839.678,
    "poster_path": "https://image.tmdb.org/t/p/w342/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    "release_date": "1994-06-23",
    "title": "The Lion King",
    "vote_average": 8.2,
    "vote_count": 13683
  },
  
  ]
    constructor(private route: ActivatedRoute) {
     this.route.params.subscribe( params =>{
       this.id=params.id
     } );
   }
movie:any;
  ngOnInit(): void {
   this.movie= this.movies.filter(item=>{
      return item.id==this.id
    })[0]
    console.log(this.movie);

  }

}
