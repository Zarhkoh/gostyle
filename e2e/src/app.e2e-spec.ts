// ./app.po correspond au model ou l'on créait des variable de nos éléments à tester, à faire si on à le temps 
import { AppPage } from './app.po';
import { browser, element, by, protractor} from "protractor";

describe('new App', () => {
  let page: AppPage;
  const EC = protractor.ExpectedConditions;

  //constante home
  const menuCompte = element(by.id('account'));
  const menuListe = element(by.id('coupon-list'));
  const menuScanner = element(by.id('scanner'));
  const logo = element(by.css('.logoNoir'));

  //constante Account
  const compteNom = element(by.css('.nom'));
  const comptePrenom = element(by.css('.prenom'));
  const compteEmail = element(by.css('.email'));


  beforeEach(() => {
    //page = new AppPage();
    //browser.get("/home");
    browser.get('/home', 20000).then(result => {
      browser.waitForAngularEnabled(false);
    });
  });

  describe('Page home', () => {

    it('Affiche le menu', () => {
      expect(menuCompte.getText()).toContain('MON COMPTE');
      expect(menuListe.getText()).toContain('MA LISTE');
      expect(menuScanner.getText()).toContain('SCANNER');
    });

    it('Affiche le logo', () => {
      expect(logo.innerHTML).not.toBeNull();
    });
  });

  describe('Page Account', () => {

    it('Arrive bien sur la page mon compte et affiche bien les items nom, prénom, email', () => {
      menuCompte.click();
      browser.wait(EC.visibilityOf(menuCompte), 20000).then(result => {
          expect(compteNom.getText()).toContain('Nom:');
          expect(comptePrenom.getText()).toContain('Prénom:');
          expect(compteEmail.getText()).toContain('Adresse e-mail:');
          browser.refresh();
        }).catch(err => {
        });
      })
    });



});
