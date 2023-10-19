import { Component, OnInit, forwardRef } from '@angular/core';
import { Member } from '../_models/member';
import { MembersService } from '../_services/members.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  members: Member[] | undefined;
  predicate = 'liked';

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadLikes();
  }

  loadLikes() {
    console.log(this.predicate);
    this.memberService.getLikes(this.predicate).subscribe({
      next: response => {
        this.members = response
      }
    })
  }

}
