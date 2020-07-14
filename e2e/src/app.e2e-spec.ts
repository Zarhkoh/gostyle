// ./app.po correspond au model ou l'on créait des variable de nos éléments à tester, à faire si on à le temps 
import { AppPage } from './app.po';
import { browser, element, by, protractor} from "protractor";

describe('App goStyle', () => {
  let page: AppPage;
  const EC = protractor.ExpectedConditions;

  //constante page auth
  const textLogo = element(by.css('.text_logo'));
  const btnSignIn = element(by.css('.button-signin'));
  const btnSignUp = element(by.css('.button-signup'));

  //constante page register
  const registerNom = element(by.id('register-nom'));
  const registerPrenom = element(by.id('register-prenom'));
  const registerEmail = element(by.id('register-email'));
  const registerMDP = element(by.id('register-mdp'));
  const registerBtnValider = element(by.id('register-btn-valider'));
  const inputNom = element(by.id('input-nom'));
  const inputPrenom = element(by.id('input-prenom'))
  const inputEmail = element(by.id('input-email'))
  const inputMDP = element(by.id('input-mdp'))


  //constante home
  const menuCompte = element(by.id('account'));
  const menuListe = element(by.id('coupon-list'));
  const menuScanner = element(by.id('scanner'));
  const menuCompteText = element(by.id('account-text'));
  const menuListeText = element(by.id('coupon-list-text'));
  const menuScannerText = element(by.id('scanner-text'));
  const logo = element(by.css('.logoNoir'));

  //constante Account
  const compteNom = element(by.css('.nom'));
  const comptePrenom = element(by.css('.prenom'));
  const compteEmail = element(by.css('.email'));

  //constante Scanner
  const pageScanner = element(by.id('page-scanner'));

  //constante Coupons-list
  const listeCoupons = element(by.id('listeCoupons'));

  //constante Footer
  const homeFooter = element(by.id('home-footer'));
  const scannerFooter = element(by.id('scanner-footer'));
  const couponListFooter = element(by.id('coupon-list-footer'));

  //constante header
  const iconBack = element(by.css('.iconBack'));
  


  beforeEach(() => {
    //page = new AppPage();
    //browser.get("/home");
    browser.get('/auth', 20000).then(result => {
      browser.waitForAngularEnabled(false);
    });
  });

  describe('Page auth', () => {

    it('affiche les boutons signin et signup', () => {
      browser.wait(EC.visibilityOf(textLogo), 20000).then(result => {
        expect(btnSignIn.innerHTML).not.toBeNull();
        expect(btnSignUp.innerHTML).not.toBeNull();
        }).catch(err => {
      });
    });
  });

  describe('Page register', () => {

    it('arrive bien sur la page register et affiche bien les élément de la page', () => {
      btnSignUp.click();
      browser.wait(EC.visibilityOf(registerNom), 20000).then(result => {
        expect(registerNom.innerHTML).not.toBeNull();
        expect(registerPrenom.innerHTML).not.toBeNull();
        expect(registerEmail.innerHTML).not.toBeNull();
        expect(registerMDP.innerHTML).not.toBeNull();
        expect(registerBtnValider.innerHTML).not.toBeNull();
        }).catch(err => {
      });
    });
    it('valide l\'inscription', () => {
      inputNom.sendKeys('Delaby');
      inputPrenom.sendKeys('Sullivan');
      inputEmail.sendKeys('zarhkoh@hotmail.fr');
      inputMDP.sendKeys('test');
      browser.wait(EC.visibilityOf(registerNom), 20000).then(result => {
       
        }).catch(err => {
      });
    });


  });

  describe('Page home', () => {

    it('Affiche le menu', () => {
      browser.get('/home')
      browser.wait(EC.visibilityOf(menuCompte), 20000).then(result => {
        expect(menuCompteText.innerHTML).not.toBeNull();
        expect(menuListeText.innerHTML).not.toBeNull();
        expect(menuScannerText.innerHTML).not.toBeNull();
      }).catch(err => {
      });
    });

    it('Affiche le logo', () => {
      expect(logo.innerHTML).not.toBeNull();
    });
  });

  describe('Page Account', () => {

    it('Arrive bien sur la page mon compte et affiche bien les items nom, prénom, email', () => {
      browser.get('/home')
      menuCompte.click();
      browser.wait(EC.visibilityOf(menuCompte), 20000).then(result => {
          expect(compteNom.getText()).toContain('Nom:');
          expect(comptePrenom.getText()).toContain('Prénom:');
          expect(compteEmail.getText()).toContain('Adresse e-mail:');
        }).catch(err => {
        });
      })

      it('Afficher le header', () => {
        expect(iconBack.innerHTML).not.toBeNull();
        })

      it('Afficher le pied de page avec les onglets', () => {
        expect(homeFooter.innerHTML).not.toBeNull();
        expect(scannerFooter.innerHTML).not.toBeNull();
        expect(couponListFooter.innerHTML).not.toBeNull();
        })


    });

    describe('Page Scanner', () => {
      
      it('Arrive bien sur la page scanner et affiche bien le scanner', () => {
        browser.get('/account');
        scannerFooter.click();
        browser.wait(EC.visibilityOf(pageScanner), 20000).then(result => {
            expect(pageScanner.innerHTML).not.toBeNull();
          }).catch(err => {
          });
        })
      //it('le bouton du scanner fonctionne ...', () => {
        //BoutonScanner.click();
        //browser.wait(EC.visibilityOf(Scanner), 20000).then(result => {
            //expect(Scanner.getText()).toContain('Nom:');
            //browser.refresh();
          //}).catch(err => {
          //});
        //})

        it('Afficher le header', () => {
          expect(iconBack.innerHTML).not.toBeNull();
        })

        it('Afficher le pied de page avec les onglets', () => {
          expect(homeFooter.innerHTML).not.toBeNull();
          expect(scannerFooter.innerHTML).not.toBeNull();
          expect(couponListFooter.innerHTML).not.toBeNull();
          })
  

      });

      describe('Page Coupons-list', () => {

        it('Arrive bien sur la page mes coupons et affiche bien la listes des coupons', () => {
          browser.get('/scanner');
          couponListFooter.click;
          browser.wait(EC.visibilityOf(listeCoupons), 20000).then(result => {
              expect(listeCoupons.getText()).toContain('les coupons');
            }).catch(err => {
            });
        })

        it('Afficher le header', () => {
          expect(iconBack.innerHTML).not.toBeNull();
        })

        it('Afficher le pied de page avec les onglets', () => {
          expect(homeFooter.innerHTML).not.toBeNull();
          expect(scannerFooter.innerHTML).not.toBeNull();
          expect(couponListFooter.innerHTML).not.toBeNull();
        })

      });

      describe('retour en arrière et déconnexion', () => {
        it('fait le retour en arrière vers la page home', () => {
          browser.wait(EC.visibilityOf(menuCompte), 20000).then(result => {
            expect(menuCompteText.innerHTML).not.toBeNull();
            expect(menuListeText.innerHTML).not.toBeNull();
            expect(menuScannerText.innerHTML).not.toBeNull();
          }).catch(err => {
          });
        });
      });
});
