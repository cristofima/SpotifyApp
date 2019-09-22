import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  artists: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {}

  find(artist: string) {
    this.spotifyService.getArtists(artist).subscribe((data: any) => {
      this.artists = data;
    });
  }
}
