import { getTestBed, TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';

export const configureTestSuite = () => {
    const testBedApi: any = getTestBed();
    const originReset = TestBed.resetTestingModule;

    beforeAll(() => {
        TestBed.resetTestingModule();
        TestBed.resetTestingModule = () => TestBed;
    });

    afterEach(() => {
        testBedApi._activeFixtures.forEach((fixture: ComponentFixture<any>) => fixture.destroy());
        testBedApi._instantiated = false;
    });

    afterAll(() => {
        TestBed.resetTestingModule = originReset;
        TestBed.resetTestingModule();
    });
};


/* CONFIGURE UNIT TESTS LIKE THIS BELOW UTILIZE configureTestSuite() function above */

// import { configureUnitTestSuite } from 'src/app/shared/unit-test/configure-test-suite'

// describe('MyCustomNameComponent', () => {
//     let component: MyCustomNameComponent;
//     let fixture: ComponentFixture<MyCustomNameComponent>;
//     let element;
//     let selector;

//     configureTestSuite();

//     beforeAll(done => (async () => {
//         TestBed.configureTestingModule({
//             imports: [],
//             declarations: [MyCustomNameComponent],
//             providers: [],
//             schemas: []
//         });
//         await TestBed.compileComponents();

//     })().then(done).catch(done.fail));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(MyCustomNameComponent);
//         component = fixture.componentInstance;
//         element = fixture.debugElement.nativeElement;
//         fixture.detectChanges();
//     })

//     it('your test', () => {
//         expect(component).toBeTruthy();
//         selector = element.querySelector('#my-custom-name-wrapper');
//         expect(selector).toBeTruthy();
//     });
// });