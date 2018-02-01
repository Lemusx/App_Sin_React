/*import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import './main.html';
import App from '../imports/ui/App.js';
 
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
/*Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});*/

Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
	Template.tasks.helpers({
		tasks: function (){
			return Tasks.find({}, {sort: {createdAT: -1	}});
		}
	});
	Template.tasks.events({
		"submit .add-task": function(event){
			var name = event.target.name.value;
			
			Tasks.insert({
				name: name,
				createdAT: new Date()
			});

			event.target.name.value = '';

			return false;
		},
		"click .delete-task": function(event){
			if(confirm('Delete Task?')){
				Tasks.remove(this._id)	
			}

			return false;
		},
		
	});
}

if (Meteor.isServer){
	
}