# Salesforce Lightning Examples

## Example 01 - User Record Access
A simple component which takes two parameters - 'User Id' and 'Record Id'. This can be used to display the level of access
that a user has to a particular record.
<p align="center">
  <img src="01 - User Record Access/screenshot-desktop.png" alt="Mobile Example" width="732" height="94" />
</p>
<p align="center">
  <img src="01 - User Record Access/screenshot-mobile.png" alt="Mobile Example" width="440" height="266" />
</p>

### Usage Example

```html
<aura:application description="User_Record_Access_App" extends="force:slds">

    <c:User_Record_Access userId="xxx" recordId="xxx" />

</aura:application>
```