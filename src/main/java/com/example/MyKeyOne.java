package com.example;

import java.io.Serializable;

import javax.persistence.Column;

public class MyKeyOne implements Serializable {
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	@Column(name = "sid")
	String subjectId;
	@Column(name = "stype")
	String subjectType;
}