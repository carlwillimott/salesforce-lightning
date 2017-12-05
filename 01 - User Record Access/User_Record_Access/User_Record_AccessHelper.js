({

    init: function(component, event, helper) {

        var action = component.get('c.getUserAccess');

        action.setStorable();

        action.setParams({
            userId: component.get('v.userId'),
            recordId: component.get('v.recordId')
        });

        action.setCallback(this, function(response) {

            if (response.getState() === 'SUCCESS') {

                component.set('v.access', response.getReturnValue());
                component.set('v.loaded', true);
            }

        });

        $A.enqueueAction(action);

    }

});