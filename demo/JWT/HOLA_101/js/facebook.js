/**
 * Facebook Framework Project
 *
 * @authors Eric Hsiao, JWT TAIPEI (eric.hsiao@jwt.com)
 * @date    2013-10-11 12:56:19
 * @version $Id$ *
 */

/**
 * Need jquery
 * @link http://jquery.com/
 *
 * @V2.3
 *
 */

facebook = (function (){


	/**
	* Facebook SDK init
	* @link http://developers.facebook.com/docs/reference/javascript/FB.init/
	*/

    var config  = {
			appId			 : undefined, 	// App ID
			xfbml			 : true, 			// parse XFBML
			version    : 'v2.3',
			permission : ''
		};

	return {

		/**
		 * 	menbers
		 */

		user: {
			uid			: '',
			accessToken	: '',
			name		: '',
			isConnected : false,
		},

		/**
		 * 	events
		 */

		on: {
			/*connected : function() {},*/
		},

		/**
		 * 	functions
		 */

		init: function(_options, _callback) {

			$.extend( config, _options);

			if( !config.appId ) {
      	console.info( 'Error: appId not found.' );
        return;
      }

			window.fbAsyncInit = function() {

				FB.init({
					appId		   : config.appId,
					xfbml			 : config.xfbml,
					version    : 'v2.3'
				});

				// Additional initialization code here
				if (typeof _callback === 'function') {
					_callback();
				}
			};

			// Load the SDK Asynchronously
			(function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/zh_TW/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
		},

		/**
		 * Facebook SDK Login
		 * @link https://developers.facebook.com/docs/reference/javascript/FB.login/
		 */

		login: function(_callback) {
			FB.login(function(_response) {

				if (typeof _callback === 'function') {
					// facebook.getLoginStatus();
					_callback(_response.authResponse);
				}

			}, {
				scope: config.permission
			});
		},

		getLoginStatus: function(_callback) {
			FB.getLoginStatus(function(response) {
				if (response.status === 'connected') {
					facebook.connected(_callback);
				} else if (response.status === 'not_authorized') {
					facebook.disconnected(_callback);
				} else {
					facebook.disconnected(_callback);
				}
			});
		},

		connected: function (_callback) {
			facebook.user.isConnected = true;
			console.log("connected.");
			// facebook.user.uid = response.authResponse.userID;
			// facebook.user.accessToken = response.authResponse.accessToken;
			// FB.api('/me', function(response) {
			// 	facebook.user.name = response.name;
			// });

			// console.log(facebook.user);
		},

		disconnected: function () {
			facebook.user.isConnected = false;
			console.log("no connected.");
		},

		feed: function(_option, _callback) {

			FB.ui({
				method		: 'feed',
				name		: ((_option.name !== undefined) ? _option.name : ''),
				link		: ((_option.link !== undefined) ? _option.link : ''),
				picture		: ((_option.picture !== undefined) ? _option.picture : ''),
				caption		: ((_option.caption !== undefined) ? _option.caption : ''),
				description	: ((_option.description !== undefined) ? _option.description : '')
			}, function(response) {
				_callback(response);
			})
		},

		autoFeed: function(_option, _callback) {

		},

		imgUpload: function(_option, _callback) {

		},


		//need permission
		isFan:function (_pageID, _callback) {
			FB.api({
					method: 'pages.isFan',
					page_id: _pageID
				},
				function(response) {
					_callback(response);
				}
			);
		},
	};

})();