(function () {
  Polymer({
    ready: function(){
      this.contacts = [
        { firstName: "Danny", lastName: "LaRusso", phones: [
          { type: "Mobile", number: "(555) 121-2121" },
          { type: "Home", number: "(555) 123-4567"}]
        },
        { firstName: "Sensei", lastName: "Miyagi", phones: [
          { type: "Mobile", number: "(555) 444-2222" },
          { type: "Home", number: "(555) 999-1212"}]
        }
      ];
      this.lastSavedJson = "";
    },

    addContact: function(e, detail, sender){
    this.contacts.push({
      firstName: "",
      lastName: ""
    })
    },
    addPhone: function(e, detail, sender){
      var contactIdx = parseInt(sender.templateInstance.model.cidx)
      this.contacts[contactIdx].phones = this.contacts[contactIdx].phones || [];
      this.contacts[contactIdx].phones.push({
        type: "",
        number: ""
      })
    },
    removeContact: function(e, detail, sender){
      var contactIdx = parseInt(sender.templateInstance.model.cidx);
      this.contacts.splice(contactIdx,1);


    },
    removePhone: function(e, detail, sender){
      var contactIdx = parseInt(sender.templateInstance.model.cidx)
      var phoneIdx = parseInt(sender.templateInstance.model.pidx)
      this.contacts[contactIdx].phones.splice(phoneIdx,1);
      //if(!this.contacts[contactIdx].phones.length > 0){
      //  delete this.contacts[contactIdx].phones
      //}
    },
    saveToJson: function(e, detail, sender){
      this.lastSavedJson = JSON.stringify(this.contacts);
    }

  });

})();
