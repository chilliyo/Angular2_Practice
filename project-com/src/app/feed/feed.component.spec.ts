// import { ActivatedRoute, Data } from '@angular/router';
// import { Component } from '@angular/core';
// import { inject, TestBed } from '@angular/core/testing';

// // Load the implementations that should be tested

import { FeedComponent } from './feed.component';
import { ComponentFixture, async, TestBed} from '@angular/core/testing'
import { DebugElement } from "@angular/core";
import { By } from '@angular/platform-browser';

let fixture: ComponentFixture<FeedComponent>;
let comp: FeedComponent;
let de: DebugElement;
let el: HTMLElement;

beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedComponent ]
    })
      .compileComponents();
}));

beforeEach(() => {

  let fixture: ComponentFixture<FeedComponent>;
  let comp: FeedComponent;
  let de: DebugElement;
  let el: HTMLElement;
  fixture = TestBed.createComponent(FeedComponent);

  comp = fixture.componentInstance;

  //query for the title
  de = fixture.debugElement.query(By.css('h1'));
  el = de.nativeElement;

});

it('should display original title', () =>{
  fixture.detectChanges();
  expect(el.textContent).toContain('News Feed');
});
