doing ruby literal regex
tried to write out all values by hand
    val integer = 123
    val long = 123L
    val separatedInteger = 123_456_789
    val separatedLong = 123_456_789L
    val hexadecimal = 0xabc123
    val hexadecimalCapital = 0XABC123
    val hexadecimalSeparated = 0xab_c1_23
    val hexadecimalCapitalSeparated = 0XAB_C1_23
    val hexadecimalLong = 0xabc123L
    val hexadecimalCapitalLong = 0XABC123L
    val hexadecimalLongSeparated = 0xab_c1_23L
    val hexadecimalCapitalLongSeparated = 0XAB_C1_23L
    val binary = 0b0101010101010111
    val binaryCapital = 0B0101010101010111
    val binarySeparated = 0b01010101_01010111
    val binaryCapitalSeparated = 0B01010101_01010111
    val binaryLong = 0b0101010101010111L
    val binaryCapitalLong = 0B0101010101010111L
    val binaryLongSeparated = 0b01010101_01010111L
    val binaryCapitalLongSeparated = 0B01010101_01010111L
Too longs, lets automate it

