import { TestBed, getTestBed } from '@angular/core/testing';
import { CouponService } from './coupon.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



describe('CouponService', () => {
  let injector: TestBed;
  let service: CouponService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule, HttpClientTestingModule],
      providers: [CouponService]
    })
    injector = getTestBed();
    service = injector.get(CouponService);
    httpMock = injector.get(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify();
  });  
  
  // const service: CouponService = TestBed.get(CouponService);
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const paramCoupon = 'FREE30';
  const url = 'http://localhost:3000';
  const right_result = {
        couponId: 1,
        code_coupon: "FREE30",
        discount: 30,
        description: "30% de réduction",
        date_debut: "2020-03-12T00:00:00.000Z",
        date_fin: "2020-08-12T00:00:00.000Z"
      };  
  
  // it('getCouponByCode() should return right_result', () => {
  //     service.getCouponByCode(paramCoupon).subscribe((res) => {
  //       expect(res).toEqual(right_result);
  //     });

      //httpMock.expectOne( `${url}/couponByCodeCoupon/code_coupon=${paramCoupon}`).flush(null, { status: 200 });

      // const req = httpMock.expectOne(url +'/couponByCodeCoupon/');
      // expect(req.request.method).toBe('GET');
      // req.flush(right_result);

    //   const reqMock = httpMock.expectOne((req) => req.method === 'GET' && req.url === url +'/couponByCodeCoupon/');
    //   expect(reqMock.request.method).toBe('GET');
    //   reqMock.flush({ code_coupon: 'FREE30' });

    // });



  // let right_result = {
  //   "couponId": 1,
  //   "code_coupon": "FREE30",
  //   "discount": 30,
  //   "description": "30% de réduction",
  //   "date_debut": "2020-03-12T00:00:00.000Z",
  //   "date_fin": "2020-08-12T00:00:00.000Z"
  // }

  // let false_result = {
  //   "couponId": 1,
  //   "code_coupon": "FREE30",
  //   "discount": 50,
  //   "description": "50% de réduction",
  //   "date_debut": "2020-03-12T00:00:00.000Z",
  //   "date_fin": "2020-08-12T00:00:00.000Z"
  // }

  // it (" Doit retourner des donnée égale à rightResult ", ()  => {
  //   let res = service.getCouponByCode("FREE30");
  //   expect(res).toEqual(right_result)
  // });

  // it (" Doit retourner des donnée égale à rightResult ", () => {
  //   service.getCouponByCode("FREE30").subscribe(res => {
  //     expect(res).not.toEqual(false_result)
  //   })
  // })

});
