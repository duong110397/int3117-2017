const delay = 3000 // 3second delay trang mang lag
function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
const rand = getRandomInt(1, 99)
const rand2 = getRandomInt(1, 5)

describe('Kiem tra gia tri mac dinh', function(){

    beforeEach(function () {
        
		    cy.visit('http://13.76.80.144/signin')
		    cy.get('input[name=email]').clear().type('doctor_10@gmail.com')
		    cy.get('input[name=password]').type('Methadone@2017')
		    cy.get('button[type=submit]').click()
             cy.visit('http://13.76.80.144/main/patients/new')
    		})
 
    describe('kiem tra combobox "Xa Phuong Thi Tran thuong tru"',function(){
		
        it('kiem tra gia tri mac dinh', function(){
            cy.get("label.required").contains("Xã/Thị Trấn thường trú").parent().within(function(){
                
            	cy.get("span.select2-chosen.ng-binding").should("contain","-- Chọn Xã/Thị trấn --")
                
                                })
        })
        it('kiem tra so luong va sap xep cac gia tri trong combo', function(){

        })  
        it('kiem tra can le', function(){

        })
        it('kiem tra thong tin bat buoc', function(){

        })  
        it('kiem tra chuc nang tim kiem', function(){
            
        })
    })
})
