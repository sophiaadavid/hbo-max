import { ComponentFixture, TestBed } from '@angular/core/testing';

import {SeeDetailsLayoutComponent } from './see-details-layout.component';

describe('SecNavBarComponent', () => {
    let component: SeeDetailsLayoutComponent;
    let fixture: ComponentFixture<SeeDetailsLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ SeeDetailsLayoutComponent ]
        })
        .compileComponents();
    
        fixture = TestBed.createComponent(SeeDetailsLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
      });

      const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

      const alert = (message: string, type: string) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
      if (alertPlaceholder != null){
        alertPlaceholder.append(wrapper)
      }
        
      }
      
      const alertTrigger = document.getElementById('liveAlertBtn')
      if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
          alert('Nice, you triggered this alert message!', 'success')
        })
      }
      

});