package com.example;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@IdClass(MyKeySem1.class)

@Table(name = "semimarks")
public class SemIMarks {

	@Id
	private int student_id;
	@Id
	private String sub_id;
	@Column(name = "exam_year")
	private int exam_year;
	@Column(name = "semester")
	private int semester;
	@Column(name = "internal")
	private int internal;
	@Column(name = "external")
	private int external;
	@Column(name = "total")
	private int total;
	@Column(name = "sub_grade")
	private String sub_grade;

	public int getStudent_id() {
		return student_id;
	}

	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}

	public int getExam_year() {
		return exam_year;
	}

	public void setExam_year(int exam_year) {
		this.exam_year = exam_year;
	}

	public int getSemester() {
		return semester;
	}

	public void setSemester(int semester) {
		this.semester = semester;
	}

	public String getSub_id() {
		return sub_id;
	}

	public void setSub_id(String sub_id) {
		this.sub_id = sub_id;
	}

	public int getInternal() {
		return internal;
	}

	public void setInternal(int internal) {
		this.internal = internal;
	}

	public int getExternal() {
		return external;
	}

	public void setExternal(int external) {
		this.external = external;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public String getSub_grade() {
		return sub_grade;
	}

	public void setSub_grade(String sub_grade) {
		this.sub_grade = sub_grade;
	}

}