package com.example;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

@Table(name = "semtotal")
public class StudentSemTotal {

	@Id
	@Column(name = "student_id")
	private int student_id;
	@Column(name = "examyear")
	private int examyear;
	@Column(name = "semester")
	private int semester;
	@Column(name = "semgrade")
	private String semgrade;

	public int getStudent_id() {
		return student_id;
	}

	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}

	public int getExamyear() {
		return examyear;
	}

	public void setExamyear(int examyear) {
		this.examyear = examyear;
	}

	public int getSemester() {
		return semester;
	}

	public void setSemester(int semester) {
		this.semester = semester;
	}

	public String getSemgrade() {
		return semgrade;
	}

	public void setSemgrade(String semgrade) {
		this.semgrade = semgrade;
	}

}