({
	getData : function(cmp) {
		var action = cmp.get("c.getAccounts");
        
        action.setCallback(this, function(res) {
            var state = res.getState();
            
            if(state === "SUCCESS"){
                cmp.set('v.accountList', res.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
	}
})