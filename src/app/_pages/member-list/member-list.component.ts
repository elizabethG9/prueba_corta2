import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/_interfaces/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styles: [],
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe({
      next: (members) => {
        this.members = members;
      },
    });
  }
  createMemberButton(){
    this.router.navigate(['/createMember'])
  }
  editMemberButton(){
    this.router.navigate(['/editMember'])
  }
}
