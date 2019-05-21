({
	init : function(cmp, event, helper) {
        cmp.set('v.columns', [
            {label: "Account Name", fieldName: "Name", type: "text"},
            {label: "Zip Code", fieldName: "BillingPostalCode", type: "text"},
        ]);
        
        helper.getData(cmp);
		
	},
            
    setAccountId : function (cmp, eve){
        var selAcc = eve.getParam('selectedRows')[0].Id;
        cmp.set('v.accId', selAcc);
    }
})