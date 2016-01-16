package com.example;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@IdClass(MyKeyTwo.class)

@Table(name = "exams")
public class Exam {

	@Id
	private int examYear;
	@Id
	private int semester;
	@Column(name = "ename")
	private String examName;

	public int getExamYear() {
		return examYear;
	}

	public void setExamYear(int examYear) {
		this.examYear = examYear;
	}

	public int getSemester() {
		return semester;
	}

	public void setSemester(int semester) {
		this.semester = semester;
	}

	public String getExamName() {
		return examName;
	}

	public void setExamName(String examName) {
		this.examName = examName;
	}

}
