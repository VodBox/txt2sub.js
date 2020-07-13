# txt2sub.js - Text to Captions/Subtitle Conversion Library
txt2sub takes raw text as a string, and converts to a valid caption/subtitle format that will be understood by many subtitle editors, or non-linear editors.

Example: [https://vodbox.github.io/txt2sub.js/](https://vodbox.github.io/txt2sub.js/)

## Supported Formats
Currently the only format supported for conversion is to the SRT timed text format.

## Simple Usage
```html
<script src="txt2sub.js"></script>
<script>
    var text = "Text can be on several lines\n"
             + "Line breaks separate individual captions.\n"
             + "\n"
             + "Empty lines are ignored by default.\n"
             + "Output will be valid SRT subtitles.";

    txt2srt(text);
    /*
        1
        00:00:00,000 --> 00:00:15,000
        Text can be on several lines

        2
        00:00:15,000 --> 00:00:30,000
        Line breaks separate individual captions.

        3
        00:00:30,000 --> 00:00:45,000
        Empty lines are ignored by default.

        4
        00:00:45,000 --> 00:01:00,000
        Output will be valid SRT subtitles.
    */
</script>
```

## Advanced Usage

```javascript
txt2srt(text, {
    splitOnEmptyLines: true,
    videoLength: 60
});
```
