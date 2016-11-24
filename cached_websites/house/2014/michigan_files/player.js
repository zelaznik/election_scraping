//107.81
window.CEDATO_TAG = (function(CEDATO_TAG, pid, playerUrl, playerParams, gpvUrl, version) { 
  function injectScript(src, callback) {
    var script = document.createElement('script');
    var head = document.getElementsByTagName('head')[0] || document.documentElement;
    if(callback) {
      src += "&callback=" + callback;
    }
    script.src = src;
    script.type = 'text/javascript';
    script.async = 1;
    head.appendChild(script);
  }

  var flash = 0;

  try {
    flash = parseFloat(navigator.plugins["Shockwave Flash"].description.replace(/[\D]*([\d\.]*).*/g,'$1')) >= 10;
  } catch(e) {}

  try {
    if(!flash && window.ActiveXObject) {
      flash = !!(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"));
    }
  } catch(e) {}

  var gpvData;
  var gpvRegex = gpvUrl.match(/^data:(.*?)(;base64)?,(.*)$/);
  if(gpvRegex) {
    try {
      gpvData = JSON.parse(gpvRegex[2]==';base64' ?  atob(gpvRegex[3]) : decodeURIComponent(gpvRegex[3]));
      if(gpvData.fs) {
        gpvData = gpvData.fs[flash ? 1 : 0];
      }
    } catch(e) {}
    gpvUrl = undefined;
  }
  else {
    if(!flash) {
      gpvUrl += '&f=0';
    }
  }
  
  var player = {
    id: pid,
    params: playerParams,
    gpvUrl: gpvUrl,
    gpvData: gpvData,
    currentScript: document.currentScript,
  };
  
  if(CEDATO_TAG) {
    CEDATO_TAG.players.push(player);
  } else {
    CEDATO_TAG = {
      autoStart: true,
      players: [player],
      version: version,
    };
    injectScript(playerUrl);
  }

  if(CEDATO_TAG.init) {
    CEDATO_TAG.init();
  } else if(!gpvData && gpvUrl) {
    var callback = 'cd_'+(Math.random()*10000 | 0);

    player.onloadGPV = function(data) {
      player.gpvData = data;
    };

    window[callback] = function(data) {
      player.onloadGPV(data);
    };

    injectScript(gpvUrl, callback);
  }
  return CEDATO_TAG;
})(window.CEDATO_TAG,

/*playerID*/"14684934792438954393148959311",
/*playerURL*/"https://c.optvdo.com/player/cedato_player_107.81_d.js",
/*playerParams*/"?sid=EXTRACTED_DOMAIN&h=250&w=300&d=http%3A%2F%2Fwww.politico.com%2F2014-election%2Fresults%2Fmap%2Fhouse%2Fmichigan&pv=107.81&cb=2438954393148959311&p=1468493479&mid=s7.optvdo.com&gpvck=2466582",
/*gpvUrl*/ "data:;base64,eyJmcyI6W1t7ImlkIjoiNzg1NzQ2MDQzIiwic3VwcG9ydFNTTCI6IjEiLCJwaWQiOiIxNDY4NDkzNDc5IiwiZ3JvdXAiOiIxIiwidXJsIjoiaHR0cHM6XC9cL2Fkcy5zdGlja3lhZHN0di5jb21cL3d3d1wvZGVsaXZlcnlcL3N3ZkluZGV4LnBocD9yZXFUeXBlPUFkc1NldHVwJnByb3RvY29sVmVyc2lvbj0yLjAmem9uZUlkPTE0MzQxNjkmbG9jPVtVUkxdIiwiY3QiOiIwIiwicGxheWVySWQiOiIxNDY4NDkzNDc5IiwicnBtIjoiU0NVN2FIcFNYeUY0UmpkYWRVTWhWdHZ2YmpobnRPQTktdXVvcWNmdHZJTX4ifSx7ImlkIjoiNTMxMDU3MzQxIiwic3VwcG9ydFNTTCI6IjEiLCJwaWQiOiIxNDY4NDkzNDc5IiwiZ3JvdXAiOiIxIiwidXJsIjoiaHR0cHM6XC9cL2FzLmV1LmFuZ3NydnIuY29tXC9zZWxlY3Q/dHlwZT1keW4mcGxjPTEwNzUxMzQmY2FjaGU9W0NCXSZhbmdfdWE9TW96aWxsYSUyRjUuMCslMjhNYWNpbnRvc2glM0IrSW50ZWwrTWFjK09TK1grMTAlNUYxMSU1RjYlMjkrQXBwbGVXZWJLaXQlMkY1MzcuMzYrJTI4S0hUTUwlMkMrbGlrZStHZWNrbyUyOStDaHJvbWUlMkY1NC4wLjI4NDAuOTgrU2FmYXJpJTJGNTM3LjM2JmFuZ19pcD0xNjIuMjExLjM0LjE3MiZhbmdfZG9tYWluPVtVUkxdJmFuZ19oZWlnaHQ9MjUwJmFuZ193aWR0aD0zMDAmYW5nX3ZwYWlkPXRydWUmYW5nX3BhZ2U9W1VSTF0mYW5nX3JlZj1bVVJMXSZhbmdfbWltZT12aWRlb1wvbXA0IiwiY3QiOiIzIiwicGxheWVySWQiOiIxNDY4NDkzNDc5IiwicnBtIjoiWG5va0xEMHZmaXd6TFZ0cFpHRWpJb0l1MUl2STdpZlpoWndqYlJia3pGQX4ifSx7ImFwIjp0cnVlLCJpZCI6ImMiLCJjYWxsYmFja3MiOnsiYWRzdGFydCI6W3sidHlwZUlkIjoiMCIsInVybCI6Imh0dHBzOlwvXC9waXhlbC56aXBwb3JtZWRpYS5jb21cLz9zdXBwbHlfaWQ9W1NVUFBMWV9JRF0mc3ViX2lkPVtVUkxdJmRlbWFuZF9pZD1bREVNQU5EX0lEXSZycG09W1JQTV0ifSx7InR5cGVJZCI6IjAiLCJ1cmwiOiJodHRwczpcL1wvZnF0YWcuY29tXC9waXhlbC5jZ2k/b3JnPW11U0VWYWRyYUszYnJlNEFjdXN3JnJ0PWRpc3BsYXlJbWcmcD1bU1VQUExZX0lEXSZmbXQ9dmlkZW8mc2w9MSZyZD1bVVJMXSZhPWNlZGF0byZjbXA9W0RFTUFORF9JRF0ifV19LCJuaSI6IjE3ODk0MTc4IiwiY28iOmZhbHNlLCJzZGx2ZSI6IjEiLCJjb250ZW50Ijp7InR5cGUiOjEsImNwZiI6ZmFsc2UsInVybCI6Imh0dHBzOlwvXC81MmYyMmNkNTZkNWYuYml0c25nby5uZXRcL0Zvb2RsaW9uLm1wNCIsIndhaXQiOjAsImNsaWNrIjoiaHR0cHM6XC9cL3d3dy5mb29kbGlvbi5jb21cLyIsImNsIjp0cnVlfSwiY3ZhcnMiOnsiSVAiOiIxNjIuMjExLjM0LjE3MiIsIkROVCI6IjAifSwidndmIjoxLCJpbSI6IjAiLCJzZGxwZSI6IjEiLCJhcyI6ZmFsc2UsImhvIjpmYWxzZX1dLFt7ImlkIjoiNzg1NzQ2MDQzIiwic3VwcG9ydFNTTCI6IjEiLCJwaWQiOiIxNDY4NDkzNDc5IiwiZ3JvdXAiOiIxIiwidXJsIjoiaHR0cHM6XC9cL2Fkcy5zdGlja3lhZHN0di5jb21cL3d3d1wvZGVsaXZlcnlcL3N3ZkluZGV4LnBocD9yZXFUeXBlPUFkc1NldHVwJnByb3RvY29sVmVyc2lvbj0yLjAmem9uZUlkPTE0MzQxNjkmbG9jPVtVUkxdIiwiY3QiOiIwIiwicGxheWVySWQiOiIxNDY4NDkzNDc5IiwicnBtIjoiVzBGeEtTcDdiRlE2UjBOcWIzc3phT1hlQWRsOHozbDltTjgtelAxaXFSc34ifSx7ImlkIjoiNTMxMDU3MzQxIiwic3VwcG9ydFNTTCI6IjEiLCJwaWQiOiIxNDY4NDkzNDc5IiwiZ3JvdXAiOiIxIiwidXJsIjoiaHR0cHM6XC9cL2FzLmV1LmFuZ3NydnIuY29tXC9zZWxlY3Q/dHlwZT1keW4mcGxjPTEwNzUxMzQmY2FjaGU9W0NCXSZhbmdfdWE9TW96aWxsYSUyRjUuMCslMjhNYWNpbnRvc2glM0IrSW50ZWwrTWFjK09TK1grMTAlNUYxMSU1RjYlMjkrQXBwbGVXZWJLaXQlMkY1MzcuMzYrJTI4S0hUTUwlMkMrbGlrZStHZWNrbyUyOStDaHJvbWUlMkY1NC4wLjI4NDAuOTgrU2FmYXJpJTJGNTM3LjM2JmFuZ19pcD0xNjIuMjExLjM0LjE3MiZhbmdfZG9tYWluPVtVUkxdJmFuZ19oZWlnaHQ9MjUwJmFuZ193aWR0aD0zMDAmYW5nX3ZwYWlkPXRydWUmYW5nX3BhZ2U9W1VSTF0mYW5nX3JlZj1bVVJMXSZhbmdfbWltZT12aWRlb1wvbXA0IiwiY3QiOiIzIiwicGxheWVySWQiOiIxNDY4NDkzNDc5IiwicnBtIjoiYVZsOFFESTVkMmxWUldscFZWUklYR2dwR1dIVTY0SG53ZE1tTDJDdEU1OH4ifSx7ImFwIjp0cnVlLCJpZCI6ImMiLCJjYWxsYmFja3MiOnsiYWRzdGFydCI6W3sidHlwZUlkIjoiMCIsInVybCI6Imh0dHBzOlwvXC9waXhlbC56aXBwb3JtZWRpYS5jb21cLz9zdXBwbHlfaWQ9W1NVUFBMWV9JRF0mc3ViX2lkPVtVUkxdJmRlbWFuZF9pZD1bREVNQU5EX0lEXSZycG09W1JQTV0ifSx7InR5cGVJZCI6IjAiLCJ1cmwiOiJodHRwczpcL1wvZnF0YWcuY29tXC9waXhlbC5jZ2k/b3JnPW11U0VWYWRyYUszYnJlNEFjdXN3JnJ0PWRpc3BsYXlJbWcmcD1bU1VQUExZX0lEXSZmbXQ9dmlkZW8mc2w9MSZyZD1bVVJMXSZhPWNlZGF0byZjbXA9W0RFTUFORF9JRF0ifV19LCJuaSI6IjE3ODk0MTc4IiwiY28iOmZhbHNlLCJzZGx2ZSI6IjEiLCJjb250ZW50Ijp7InR5cGUiOjEsImNwZiI6ZmFsc2UsInVybCI6Imh0dHBzOlwvXC81MmYyMmNkNTZkNWYuYml0c25nby5uZXRcL0Zvb2RsaW9uLm1wNCIsIndhaXQiOjAsImNsaWNrIjoiaHR0cHM6XC9cL3d3dy5mb29kbGlvbi5jb21cLyIsImNsIjp0cnVlfSwiY3ZhcnMiOnsiSVAiOiIxNjIuMjExLjM0LjE3MiIsIkROVCI6IjAifSwidndmIjoxLCJpbSI6IjAiLCJzZGxwZSI6IjEiLCJhcyI6ZmFsc2UsImhvIjpmYWxzZX1dXX0="
)
