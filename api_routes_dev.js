// JavaScript Document

const express = require('express');
const router = express.Router();

const fs = require('fs')
let rawdata = fs.readFileSync('./course.json');
let course = JSON.parse(rawdata);

// routes 
router.get('/', function(req, res) {
  let outputJSON ={
		courses : course["data"]
		}
		res.json(outputJSON);
});

router.get('/by_code/:qcode',function(req,res){
		let query = req.params['qcode']
		filtered_courses = course["data"].filter(q => q.course_code.includes(query))
		let outputJSON ={
			courses : filtered_courses
		}
		res.json(outputJSON);
		})

router.get('/by_title/:qtitle',function(req,res){
		let query = req.params['qtitle']
		filtered_courses = course["data"].filter(q => q.title.includes(query))
		let outputJSON ={
			courses : filtered_courses
		}
		res.json(outputJSON);
		})

router.get('/by_instructor/:qname',function(req,res){
		let query = req.params['qname']
		filtered_courses = course["data"].filter(q => q.instructor.includes(query))
		let outputJSON ={
			courses : filtered_courses
		}
		res.json(outputJSON);
		})

router.get('/by_level/:qlevel',function(req,res){
		let query = req.params['qlevel']
		filtered_courses = course["data"].filter(q => q.course_level.includes(query))
		let outputJSON ={
			courses : filtered_courses
		}
		res.json(outputJSON);
		})

router.get('/combined_query/:qname/:qlevel',function(req,res){
		let name = req.params['qname']
		let level = req.params['qlevel']
		filtered_courses = course["data"].filter(q => q.instructor.includes(query)&&q.course_level.includes(query))
		let outputJSON ={
			courses : filtered_courses
		}
		res.json(outputJSON);
		})

module.exports = router;