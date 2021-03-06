(function() {
	var defaultValue = function(obj, val) {
		if (obj !== undefined) return obj;
		return val;
	};

	var defaultOptions = function(options) {
		options = defaultValue(options, {});
		options.videoLength = defaultValue(options.videoLength, 60);
		options.splitOnEmptyLines = defaultValue(options.splitOnEmptyLines, false);
		return options;
	}

	var leadingZero = function(num, len) {
		var str = "" + num;

		while (str.length < len) {
			str = "0" + str;
		}

		return str;
	};

	var getTimeString = function(time) {
		var hour = leadingZero(Math.floor(time / 3600), 2);
		var min = leadingZero(Math.floor(time / 60) % 60, 2);
		var sec = leadingZero(Math.floor(time) % 60, 2);
		var ms = leadingZero(Math.floor(time * 1000) % 1000, 3);

		return hour + ":" + min + ":" + sec + "," + ms;
	};

	txt2srt = function(text, options) {
		options = defaultOptions(options);

		text = text.replace(/\r\n/gm, "\n");

		var lines;

		if (options.splitOnEmptyLines) {
			lines = text.split("\n\n");
		} else {
			text = text.replace(/^\n/gm, "");
			lines = text.split("\n");
		}

		var timeDelta = options.videoLength / lines.length;

		var out = "";

		for (var i = 0, l = lines.length; i < l; ++i) {
			var time = i * timeDelta;
			var nextTime = (i + 1) * timeDelta;
			
			out += (i + 1) + "\n";
			out += getTimeString(time) + " --> " + getTimeString(nextTime) + "\n";
			out += lines[i];

			if (i < l - 1) {
				out += "\n\n";
			}
		}

		return out;
	}
})();