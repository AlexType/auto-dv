import { Observable, tap, map, of, debounceTime, switchMap, Subject, finalize, merge } from 'rxjs';
import { UserRequestDto } from './../../../../api/dto/user-request.dto';
import { ApiService } from 'src/app/api/api.service';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-admin-dashboard-container',
  templateUrl: './admin-dashboard-container.component.html',
  styleUrls: ['./admin-dashboard-container.component.scss']
})
export class AdminDashboardContainerComponent implements OnInit {
  protected userRequests$: Observable<UserRequestDto[]> | undefined;
  protected updateRequest$: Subject<UserRequestDto> = new Subject();
  protected refetch$: Subject<void> = new Subject();
  protected loading: boolean = false;

  constructor(private readonly _apiService: ApiService) { }

  ngOnInit(): void {
    this.userRequests$ = merge(of(null), this.refetch$).pipe(switchMap(() => this._apiService.userRequests()));

    this.updateRequest$.pipe(
      untilDestroyed(this),
      debounceTime(500),
      tap(() => this.loading = true),
      switchMap((request) => this._apiService.updateUserRequest({
        adminMark: request.adminMark,
        called: request.called,
        id: request._id
      })),
      tap(() => this.loading = false),
      finalize(() => this.loading = false)
    ).subscribe()
  }

  protected focusedChange(req: UserRequestDto, event: boolean) {
    if (event) return;
    this.updateRequest$.next(req);
  }

  protected deleteUserRequest(req: UserRequestDto): void {
    this.loading = true
    this._apiService.deleteUserRequest(req._id).pipe(
      untilDestroyed(this),
      tap(() => this.refetch$.next()),
      finalize(() => this.loading = false)
    ).subscribe()
  }
}
