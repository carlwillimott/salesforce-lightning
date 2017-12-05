public with sharing class User_Record_Access {

    @AuraEnabled
    public static UserRecordAccess getUserAccess(String userId, String recordId) {

        return [
                SELECT RecordId, HasReadAccess, HasEditAccess, HasTransferAccess, HasAllAccess, MaxAccessLevel
                FROM UserRecordAccess
                WHERE UserId = : userId AND RecordId = : recordId
        ];

    }

}