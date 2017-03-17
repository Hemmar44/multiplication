<?php

class Maths {

	private $result;
	private $first;
	private $second;

	public function getResult() {

		return $this->result;
	}

	public function getFirst() {

		return $this->first;

	}

	public function getSecond() {

		return $this->second;

	}

	public function addition($firstInFirst, $secondInFirst, $firstInSecond, $secondInSecond) {
		
		$first = range($firstInFirst, $secondInFirst);
		$second = range($firstInSecond, $secondInSecond);

		do{ 
			shuffle($first);
			shuffle($second);
		} while ($first[0] + $second[0] >=100);

		$this->first = $first[0];
		$this->second = $second[0];

		$this->result = $this->first + $this->second;


	}

	public function substraction($firstInFirst, $secondInFirst, $firstInSecond, $secondInSecond) {

		$first = range($firstInFirst, $secondInFirst);
		$second = range($firstInSecond, $secondInSecond);

		do{ 
			shuffle($first);
			shuffle($second);
		} while ($first[0] < $second[0]);


		$this->first = $first[0];
		$this->second = $second[0];

		$this->result = $this->first - $this->second;
		
	}

	public function multiplication($firstInFirst, $secondInFirst, $firstInSecond, $secondInSecond) {
		
		$first = range($firstInFirst, $secondInFirst);
		$second = range($firstInSecond, $secondInSecond);

		shuffle($first);
		shuffle($second);

		$this->first = $first[0];
		$this->second = $second[0];

		$this->result = $this->first * $this->second;
		
	}

	public function division($firstInFirst, $secondInFirst, $firstInSecond, $secondInSecond) {
		
		$first = range($firstInFirst, $secondInFirst);
		$second = range($firstInSecond, $secondInSecond);

		do{ 
			shuffle($first);
			shuffle($second);

			while($first[0] / $second[0] > 10) {
				shuffle($first);
				shuffle($second);
			}

		} while ( ($first[0] % $second[0] !== 0));


		$this->first = $first[0];
		$this->second = $second[0];

		$this->result = $this->first / $this->second;
		
	}
}

$maths = new Maths;