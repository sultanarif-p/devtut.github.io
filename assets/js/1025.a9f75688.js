(window.webpackJsonp=window.webpackJsonp||[]).push([[1025],{1369:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"system-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#system-io"}},[t._v("#")]),t._v(" System.IO")]),t._v(" "),s("h2",{attrs:{id:"reading-a-text-file-using-streamreader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-a-text-file-using-streamreader"}},[t._v("#")]),t._v(" Reading a text file using StreamReader")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" fullOrRelativePath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testfile.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" fileData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" reader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("StreamReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fullOrRelativePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fileData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadToEnd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Note that this "),s("code",[t._v("StreamReader")]),t._v(" constructor overload does some auto "),s("RouterLink",{attrs:{to:"//#file-encodings"}},[t._v("encoding")]),t._v(" detection, which may or may not conform to the actual encoding used in the file.")],1),t._v(" "),s("p",[t._v("Please note that there are some convenience methods that read all text from file available on the "),s("code",[t._v("System.IO.File")]),t._v(" class, namely "),s("code",[t._v("File.ReadAllText(path)")]),t._v(" and "),s("code",[t._v("File.ReadAllLines(path)")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"serial-ports-using-system-io-serialports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serial-ports-using-system-io-serialports"}},[t._v("#")]),t._v(" Serial Ports using System.IO.SerialPorts")]),t._v(" "),s("h3",{attrs:{id:"iterating-over-connected-serial-ports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iterating-over-connected-serial-ports"}},[t._v("#")]),t._v(" Iterating over connected serial ports")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" ports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SerialPort"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetPortNames")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" ports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"instantiating-a-system-io-serialport-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instantiating-a-system-io-serialport-object"}},[t._v("#")]),t._v(" Instantiating a System.IO.SerialPort object")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SerialPort")]),t._v(" port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SerialPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SerialPort")]),t._v(" port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SerialPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COM 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SerialPort")]),t._v(" port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SerialPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COM 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("NOTE")]),t._v(": Those are just three of the seven overloads of the constructor for the SerialPort type.")]),t._v(" "),s("h3",{attrs:{id:"reading-writing-data-over-the-serialport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-writing-data-over-the-serialport"}},[t._v("#")]),t._v(" Reading/Writing data over the SerialPort")]),t._v(" "),s("p",[t._v("The simplest way is to use the "),s("code",[t._v("SerialPort.Read")]),t._v(" and "),s("code",[t._v("SerialPort.Write")]),t._v(" methods.\nHowever you can also retrieve a "),s("code",[t._v("System.IO.Stream")]),t._v(" object which you can use to stream data over the SerialPort. To do this, use "),s("code",[t._v("SerialPort.BaseStream")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("Reading")])]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BytesToRead"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Note that you can swap out a byte-array for a char-array if you prefer.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" buffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("You can also read all data available:")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" curData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadExisting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Or simply read to the first newline encountered in the incoming data:")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" line "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Writing")])]),t._v(" "),s("p",[t._v("The easiest way to write data over the SerialPort is:")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[t._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"here is some text to be sent over the serial port."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("However you can also send data over like this when needed:")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Note that you can swap out the byte-array with a char-array if you so choose.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"reading-writing-data-using-system-io-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-writing-data-using-system-io-file"}},[t._v("#")]),t._v(" Reading/Writing Data Using System.IO.File")]),t._v(" "),s("p",[t._v("First, let's see three different ways of extracting data from a file.")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" fileText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" File"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadAllText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" fileLines "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" File"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadAllLines")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" fileBytes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" File"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadAllBytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("ul",[s("li",[t._v("On the first line, we read all the data in the file as a string.\n")]),s("li",[t._v("On the second line, we read the data in the file into a string-array.\nEach line in the file becomes an element in the array.")]),t._v(" "),s("li",[t._v("On the third we read the bytes from the file.")])]),t._v(" "),s("p",[t._v("Next, let's see three different methods of "),s("strong",[t._v("appending")]),t._v(" data to a file.\nIf the file you specify doesn't exist, each method will automatically create the file before attempting to append the data to it.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\nFile.AppendAllText(file, "Here is some data that is\\nappended to the file.");\n File.AppendAllLines(file, new string[2] { "Here is some data that is", "appended to the file." });\n using (StreamWriter stream = File.AppendText(file))\n {\n     stream.WriteLine("Here is some data that is");\n     stream.Write("appended to the file.");\n }\n\n')])])]),s("ul",[s("li",[t._v("On the first line we simply add a string to the end of the specified file.")]),t._v(" "),s("li",[t._v("On the second line we add each element of the array onto a new line in the file.")]),t._v(" "),s("li",[t._v("Finally on the third line we use "),s("code",[t._v("File.AppendText")]),t._v(" to open up a streamwriter which will append whatever data is written to it.")])]),t._v(" "),s("p",[t._v("And lastly, let's see three different methods of "),s("strong",[t._v("writing")]),t._v(" data to a file.\nThe difference between "),s("strong",[t._v("appending")]),t._v(" and "),s("strong",[t._v("writing")]),t._v(" being that writing "),s("strong",[t._v("over-writes")]),t._v(" the data in the file while appending "),s("strong",[t._v("adds")]),t._v(" to the data in the file.\nIf the file you specify doesn't exist, each method will automatically create the file before attempting to write the data to it.")]),t._v(" "),s("div",{staticClass:"language-dotnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dotnet"}},[s("code",[t._v("File"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteAllText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"here is some data\\nin this file."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteAllLines")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"here is some data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"in this file"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteAllBytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("ul",[s("li",[t._v("The first line writes a string to the file.")]),t._v(" "),s("li",[t._v("The second line writes each string in the array on it's own line in the file.")]),t._v(" "),s("li",[t._v("And the third line allows you to write a byte array to the file.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);