package com.example;

import java.io.Serializable;

import javax.persistence.Column;

public class MyKeyThree implements Serializable {
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	@Column(name = "student_id")
	int student_id;
	@Column(name = "sub_id")
	String sub_id;
}
