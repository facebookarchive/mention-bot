/**
 * Copyright (c) 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

'use strict';

var minimatch = require('minimatch');
var nodeSchedule = require('node-schedule');


var schedule: { jobs: Array<any>, work: Function, performAt: Function, parse: Function } = {
  jobs: [],

  work: function(time: Date, callback: Function){
    var promise: Promise = new Promise(function(resolve, reject: (error: any) => void){
      callback(resolve, reject);
    });

    var job = nodeSchedule.scheduleJob(time, promise);
    this.jobs.push(job);

    return promise;
  },

  performAt: async function(time: Date, callback: Function) {
    try {
      await this.work(time, callback);
    } catch(e) {
      console.error(e)
    }
  },

  parse: function(delayTime: string): Date {
    var moment: Array<string> = [
        'm', 'min', 'mins', 'minute', 'minutes',
        'h', 'hour', 'hours',
        'd', 'day', 'days'
      ];
    var invalidTimeMsg: string = 'Invalid delay time setting, it should in following format:\n' +
      '3m, 3 m, or 3 min\naccepted moments are: ' + moment.join(', ') + '\n instead got ' + delayTime + '\n';

    if(!minimatch(delayTime, '*+(' + moment.join('|') + ')')) {
      throw new Error(invalidTimeMsg);
    }

    var curTime: Date = new Date();
    var minutes: number = curTime.getMinutes();
    var hours: number = curTime.getHours();
    var day: number = curTime.getDate();
    var month: number = curTime.getMonth();
    var year: number = curTime.getFullYear();
    var parsedTime: ?Array<string> = delayTime.match(/(\d+)\s?(\w*)/);
    var time: number | false = false;

    if(parsedTime) {
      time = parseInt(parsedTime[1]);
    }

    if(!parsedTime || !time){
      throw new Error(invalidTimeMsg);
    }

    switch (parsedTime[2][0]) {
      case 'm':
        minutes += time;
        break;
      case 'h':
        hours += time;
        break;
      case 'd':
        day += time;
        break;
      default:
        throw new Error(invalidTimeMsg);
    }

    return new Date(year, month, day, hours, minutes, curTime.getSeconds(), 0);
  }
};

module.exports = schedule;
