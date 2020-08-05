import axios from "axios";
import _ from "lodash";
import bossupport from "./codecept.conf";

axios.get(bossupport.backendurl+'/data/S01', {})
  .then(function (res) {
      var sprintno="S01";
      //var criteriaArr=_.
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
