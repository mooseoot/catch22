function dekurow() {

  //variable definitions
  var Dekubig;
  Dekubig = parseInt(document.getElementById("dekubig").value || 0);
  var Dekusmall;
  Dekusmall = parseInt(document.getElementById("dekusmall").value || 0);
  var Dekuskull;
  Dekuskull = parseInt(document.getElementById("dekuskull").value || 0);

  var Dekudbigd;
  Dekudbigd = parseInt(document.getElementById("dekudbigd").value || 0);
  var Dekudsmalld;
  Dekudsmalld = parseInt(document.getElementById("dekudsmalld").value || 0);
  var Dekudskulld;
  Dekudskulld = parseInt(document.getElementById("dekudskulld").value || 0);

  var dekubigsmall = Dekubig + Dekusmall;
  var dekubigskull = Dekubig + Dekuskull;
  var dekusmallskull = Dekusmall + Dekuskull;
  var dekubigsmallskull = Dekubig + Dekusmall + Dekuskull;

  var dekudbigdsmalld = Dekudbigd + Dekudsmalld;
  var dekudbigdskulld = Dekudbigd + Dekudskulld;
  var dekudsmalldskulld = Dekudsmalld + Dekudskulld;
  var dekudbigdsmalldskulld = Dekudbigd + Dekudsmalld + Dekudskulld;


  //snap numerator to be denominator
  document.getElementById("dekubig").max = Dekudbigd;
  document.getElementById("dekusmall").max = Dekudsmalld;
  document.getElementById("dekuskull").max = Dekudskulld;

  if (document.getElementById("dekubig").value > document.getElementById("dekudbigd").value) {
    document.getElementById("dekubig").value = document.getElementById("dekudbigd").value
  } else {}
  if (document.getElementById("dekusmall").value > document.getElementById("dekudsmalld").value) {
    document.getElementById("dekusmall").value = document.getElementById("dekudsmalld").value
  } else {}
  if (document.getElementById("dekuskull").value > document.getElementById("dekudskulld").value) {
    document.getElementById("dekuskull").value = document.getElementById("dekudskulld").value
  } else {}
  //



  //snap denominator to max because max doesnt do its job sometimes
  if (Dekudbigd.value > Dekudbigd.max) {
    Dekudbigd.value = Dekudbigd.max
  } else {}
  if (Dekudsmalld.value > Dekudsmalld.max) {
    Dekudsmalld.value = Dekudsmalld.max
  } else {}
  if (Dekudskulld.value > Dekudskulld.max) {
    Dekudskulld.value = Dekudskulld.max
  } else {}
  //


  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Dekubig + Dekusmall + Dekuskull + Dekudbigd + Dekudsmalld + Dekudskulld == 0) {
    document.getElementById('dekubig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('dekusmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('dekuskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (dekudbigdsmalld == Dekudskulld) {
    if (Dekudbigd + Dekudsmalld + Dekudskulld == 0) {
      document.getElementById('dekubig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('dekusmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('dekuskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('dekubig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('dekusmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('dekuskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (dekudbigdskulld == Dekudsmalld) {
      if (Dekudbigd + Dekudsmalld + Dekudskulld == 0) {
        document.getElementById('dekubig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('dekusmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('dekuskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('dekubig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('dekusmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('dekuskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (dekudsmalldskulld == Dekudbigd) {
        if (Dekudbigd + Dekudsmalld + Dekudskulld == 0) {
          document.getElementById('dekubig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('dekusmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('dekuskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('dekubig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('dekusmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('dekuskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('dekubig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('dekusmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('dekuskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

  ///numerator code
  if (Dekubig + Dekusmall + Dekuskull !== 0) {
    if (Dekubig === Dekudbigd) {
      if (Dekusmall === Dekudsmalld) {
        if (Dekuskull === Dekudskulld) {
          if (dekudbigdsmalld == Dekudskulld) {
            document.getElementById('dekubig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('dekusmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('dekuskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (dekudbigdskulld == Dekudsmalld) {
              document.getElementById('dekubig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('dekusmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('dekuskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (dekudsmalldskulld == Dekudbigd) {
                document.getElementById('dekubig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('dekusmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('dekuskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

///////

function dcrow() {

  //variable definitions
  var Dcbig;
  Dcbig = parseInt(document.getElementById("dcbig").value || 0);
  var Dcsmall;
  Dcsmall = parseInt(document.getElementById("dcsmall").value || 0);
  var Dcskull;
  Dcskull = parseInt(document.getElementById("dcskull").value || 0);

  var Dcdbigd;
  Dcdbigd = parseInt(document.getElementById("dcdbigd").value || 0);
  var Dcdsmalld;
  Dcdsmalld = parseInt(document.getElementById("dcdsmalld").value || 0);
  var Dcdskulld;
  Dcdskulld = parseInt(document.getElementById("dcdskulld").value || 0);

  var dcbigsmall = Dcbig + Dcsmall;
  var dcbigskull = Dcbig + Dcskull;
  var dcsmallskull = Dcsmall + Dcskull;
  var dcbigsmallskull = Dcbig + Dcsmall + Dcskull;

  var dcdbigdsmalld = Dcdbigd + Dcdsmalld;
  var dcdbigdskulld = Dcdbigd + Dcdskulld;
  var dcdsmalldskulld = Dcdsmalld + Dcdskulld;
  var dcdbigdsmalldskulld = Dcdbigd + Dcdsmalld + Dcdskulld;

  //snap numerator to be denominator
  document.getElementById("dcbig").max = Dcdbigd;
  document.getElementById("dcsmall").max = Dcdsmalld;
  document.getElementById("dcskull").max = Dcdskulld;

  if (document.getElementById("dcbig").value > document.getElementById("dcbig").max) {
    document.getElementById("dcbig").value = document.getElementById("dcbig").max
  } else {}
  if (document.getElementById("dcsmall").value > document.getElementById("dcsmall").max) {
    document.getElementById("dcsmall").value = document.getElementById("dcsmall").max
  } else {}
  if (document.getElementById("dcskull").value > document.getElementById("dcskull").max) {
    document.getElementById("dcskull").value = document.getElementById("dcskull").max
  } else {}

  //snap denominator to max because max doesnt do its job sometimes
  if (Dcdbigd.value > Dcdbigd.max) {
    Dcdbigd.value = Dcdbigd.max
  } else {}
  if (Dcdsmalld.value > Dcdsmalld.max) {
    Dcdsmalld.value = Dcdsmalld.max
  } else {}
  if (Dcdskulld.value > Dcdskulld.max) {
    Dcdskulld.value = Dcdskulld.max
  } else {}
  //
  //

  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Dcbig + Dcsmall + Dcskull + Dcdbigd + Dcdsmalld + Dcdskulld == 0) {
    document.getElementById('dcbig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('dcsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('dcskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (dcdbigdsmalld == Dcdskulld) {
    if (Dcdbigd + Dcdsmalld + Dcdskulld == 0) {
      document.getElementById('dcbig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('dcsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('dcskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('dcbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('dcsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('dcskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (dcdbigdskulld == Dcdsmalld) {
      if (Dcdbigd + Dcdsmalld + Dcdskulld == 0) {
        document.getElementById('dcbig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('dcsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('dcskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('dcbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('dcsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('dcskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (dcdsmalldskulld == Dcdbigd) {
        if (Dcdbigd + Dcdsmalld + Dcdskulld == 0) {
          document.getElementById('dcbig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('dcsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('dcskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('dcbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('dcsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('dcskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('dcbig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('dcsmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('dcskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

   ///numerator code
  if (Dcbig + Dcsmall + Dcskull !== 0) {
    if (Dcbig === Dcdbigd) {
      if (Dcsmall === Dcdsmalld) {
        if (Dcskull === Dcdskulld) {
          if (dcdbigdsmalld == Dcdskulld) {
            document.getElementById('dcbig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('dcsmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('dcskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (dcdbigdskulld == Dcdsmalld) {
              document.getElementById('dcbig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('dcsmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('dcskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (dcdsmalldskulld == Dcdbigd) {
                document.getElementById('dcbig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('dcsmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('dcskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

//////

function jaburow() {

  //variable definitions
  var Jabubig;
  Jabubig = parseInt(document.getElementById("jabubig").value || 0);
  var Jabusmall;
  Jabusmall = parseInt(document.getElementById("jabusmall").value || 0);
  var Jabuskull;
  Jabuskull = parseInt(document.getElementById("jabuskull").value || 0);

  var Jabudbigd;
  Jabudbigd = parseInt(document.getElementById("jabudbigd").value || 0);
  var Jabudsmalld;
  Jabudsmalld = parseInt(document.getElementById("jabudsmalld").value || 0);
  var Jabudskulld;
  Jabudskulld = parseInt(document.getElementById("jabudskulld").value || 0);

  var jabubigsmall = Jabubig + Jabusmall;
  var jabubigskull = Jabubig + Jabuskull;
  var jabusmallskull = Jabusmall + Jabuskull;
  var jabubigsmallskull = Jabubig + Jabusmall + Jabuskull;

  var jabudbigdsmalld = Jabudbigd + Jabudsmalld;
  var jabudbigdskulld = Jabudbigd + Jabudskulld;
  var jabudsmalldskulld = Jabudsmalld + Jabudskulld;
  var jabudbigdsmalldskulld = Jabudbigd + Jabudsmalld + Jabudskulld;

  //snap numerator to be denominator
  document.getElementById("jabubig").max = Jabudbigd;
  document.getElementById("jabusmall").max = Jabudsmalld;
  document.getElementById("jabuskull").max = Jabudskulld;

  if (document.getElementById("jabubig").value > document.getElementById("jabubig").max) {
    document.getElementById("jabubig").value = document.getElementById("jabubig").max
  } else {}
  if (document.getElementById("jabusmall").value > document.getElementById("jabusmall").max) {
    document.getElementById("jabusmall").value = document.getElementById("jabusmall").max
  } else {}
  if (document.getElementById("jabuskull").value > document.getElementById("jabuskull").max) {
    document.getElementById("jabuskull").value = document.getElementById("jabuskull").max
  } else {}

  //snap denominator to max because max doesnt do its job sometimes
  if (Jabudbigd.value > Jabudbigd.max) {
    Jabudbigd.value = Jabudbigd.max
  } else {}
  if (Jabudsmalld.value > Jabudsmalld.max) {
    Jabudsmalld.value = Jabudsmalld.max
  } else {}
  if (Jabudskulld.value > Jabudskulld.max) {
    Jabudskulld.value = Jabudskulld.max
  } else {}
  //

  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Jabubig + Jabusmall + Jabuskull + Jabudbigd + Jabudsmalld + Jabudskulld == 0) {
    document.getElementById('jabubig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('jabusmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('jabuskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (jabudbigdsmalld == Jabudskulld) {
    if (Jabudbigd + Jabudsmalld + Jabudskulld == 0) {
      document.getElementById('jabubig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('jabusmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('jabuskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('jabubig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('jabusmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('jabuskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (jabudbigdskulld == Jabudsmalld) {
      if (Jabudbigd + Jabudsmalld + Jabudskulld == 0) {
        document.getElementById('jabubig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('jabusmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('jabuskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('jabubig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('jabusmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('jabuskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (jabudsmalldskulld == Jabudbigd) {
        if (Jabudbigd + Jabudsmalld + Jabudskulld == 0) {
          document.getElementById('jabubig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('jabusmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('jabuskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('jabubig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('jabusmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('jabuskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('jabubig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('jabusmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('jabuskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

  ///numerator code
  if (Jabubig + Jabusmall + Jabuskull !== 0) {
    if (Jabubig === Jabudbigd) {
      if (Jabusmall === Jabudsmalld) {
        if (Jabuskull === Jabudskulld) {
          if (jabudbigdsmalld == Jabudskulld) {
            document.getElementById('jabubig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('jabusmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('jabuskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (jabudbigdskulld == Jabudsmalld) {
              document.getElementById('jabubig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('jabusmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('jabuskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (jabudsmalldskulld == Jabudbigd) {
                document.getElementById('jabubig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('jabusmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('jabuskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

//////

function forestrow() {

  //variable definitions
  var Forestbig;
  Forestbig = parseInt(document.getElementById("forestbig").value || 0);
  var Forestsmall;
  Forestsmall = parseInt(document.getElementById("forestsmall").value || 0);
  var Forestskull;
  Forestskull = parseInt(document.getElementById("forestskull").value || 0);

  var Forestdbigd;
  Forestdbigd = parseInt(document.getElementById("forestdbigd").value || 0);
  var Forestdsmalld;
  Forestdsmalld = parseInt(document.getElementById("forestdsmalld").value || 0);
  var Forestdskulld;
  Forestdskulld = parseInt(document.getElementById("forestdskulld").value || 0);

  var forestbigsmall = Forestbig + Forestsmall;
  var forestbigskull = Forestbig + Forestskull;
  var forestsmallskull = Forestsmall + Forestskull;
  var forestbigsmallskull = Forestbig + Forestsmall + Forestskull;

  var forestdbigdsmalld = Forestdbigd + Forestdsmalld;
  var forestdbigdskulld = Forestdbigd + Forestdskulld;
  var forestdsmalldskulld = Forestdsmalld + Forestdskulld;
  var forestdbigdsmalldskulld = Forestdbigd + Forestdsmalld + Forestdskulld;

  //snap numerator to be denominator
  document.getElementById("forestbig").max = Forestdbigd;
  document.getElementById("forestsmall").max = Forestdsmalld;
  document.getElementById("forestskull").max = Forestdskulld;

  if (document.getElementById("forestbig").value > document.getElementById("forestbig").max) {
    document.getElementById("forestbig").value = document.getElementById("forestbig").max
  } else {}
  if (document.getElementById("forestsmall").value > document.getElementById("forestsmall").max) {
    document.getElementById("forestsmall").value = document.getElementById("forestsmall").max
  } else {}
  if (document.getElementById("forestskull").value > document.getElementById("forestskull").max) {
    document.getElementById("forestskull").value = document.getElementById("forestskull").max
  } else {}

  //snap denominator to max because max doesnt do its job sometimes
  if (Forestdbigd.value > Forestdbigd.max) {
    Forestdbigd.value = Forestdbigd.max
  } else {}
  if (Forestdsmalld.value > Forestdsmalld.max) {
    Forestdsmalld.value = Forestdsmalld.max
  } else {}
  if (Forestdskulld.value > Forestdskulld.max) {
    Forestdskulld.value = Forestdskulld.max
  } else {}
  //

  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Forestbig + Forestsmall + Forestskull + Forestdbigd + Forestdsmalld + Forestdskulld == 0) {
    document.getElementById('forestbig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('forestsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('forestskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (forestdbigdsmalld == Forestdskulld) {
    if (Forestdbigd + Forestdsmalld + Forestdskulld == 0) {
      document.getElementById('forestbig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('forestsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('forestskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('forestbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('forestsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('forestskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (forestdbigdskulld == Forestdsmalld) {
      if (Forestdbigd + Forestdsmalld + Forestdskulld == 0) {
        document.getElementById('forestbig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('forestsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('forestskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('forestbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('forestsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('forestskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (forestdsmalldskulld == Forestdbigd) {
        if (Forestdbigd + Forestdsmalld + Forestdskulld == 0) {
          document.getElementById('forestbig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('forestsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('forestskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('forestbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('forestsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('forestskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('forestbig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('forestsmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('forestskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

  ///numerator code
  if (Forestbig + Forestsmall + Forestskull !== 0) {
    if (Forestbig === Forestdbigd) {
      if (Forestsmall === Forestdsmalld) {
        if (Forestskull === Forestdskulld) {
          if (forestdbigdsmalld == Forestdskulld) {
            document.getElementById('forestbig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('forestsmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('forestskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (forestdbigdskulld == Forestdsmalld) {
              document.getElementById('forestbig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('forestsmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('forestskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (forestdsmalldskulld == Forestdbigd) {
                document.getElementById('forestbig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('forestsmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('forestskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

/////

function firerow() {

  //variable definitions
  var Firebig;
  Firebig = parseInt(document.getElementById("firebig").value || 0);
  var Firesmall;
  Firesmall = parseInt(document.getElementById("firesmall").value || 0);
  var Fireskull;
  Fireskull = parseInt(document.getElementById("fireskull").value || 0);

  var Firedbigd;
  Firedbigd = parseInt(document.getElementById("firedbigd").value || 0);
  var Firedsmalld;
  Firedsmalld = parseInt(document.getElementById("firedsmalld").value || 0);
  var Firedskulld;
  Firedskulld = parseInt(document.getElementById("firedskulld").value || 0);

  var firebigsmall = Firebig + Firesmall;
  var firebigskull = Firebig + Fireskull;
  var firesmallskull = Firesmall + Fireskull;
  var firebigsmallskull = Firebig + Firesmall + Fireskull;

  var firedbigdsmalld = Firedbigd + Firedsmalld;
  var firedbigdskulld = Firedbigd + Firedskulld;
  var firedsmalldskulld = Firedsmalld + Firedskulld;
  var firedbigdsmalldskulld = Firedbigd + Firedsmalld + Firedskulld;

  //snap numerator to be denominator
  document.getElementById("firebig").max = Firedbigd;
  document.getElementById("firesmall").max = Firedsmalld;
  document.getElementById("fireskull").max = Firedskulld;

  if (document.getElementById("firebig").value > document.getElementById("firebig").max) {
    document.getElementById("firebig").value = document.getElementById("firebig").max
  } else {}
  if (document.getElementById("firesmall").value > document.getElementById("firesmall").max) {
    document.getElementById("firesmall").value = document.getElementById("firesmall").max
  } else {}
  if (document.getElementById("fireskull").value > document.getElementById("fireskull").max) {
    document.getElementById("fireskull").value = document.getElementById("fireskull").max
  } else {}

  //snap denominator to max because max doesnt do its job sometimes
  if (Firedbigd.value > Firedbigd.max) {
    Firedbigd.value = Firedbigd.max
  } else {}
  if (Firedsmalld.value > Firedsmalld.max) {
    Firedsmalld.value = Firedsmalld.max
  } else {}
  if (Firedskulld.value > Firedskulld.max) {
    Firedskulld.value = Firedskulld.max
  } else {}
  //

  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Firebig + Firesmall + Fireskull + Firedbigd + Firedsmalld + Firedskulld == 0) {
    document.getElementById('firebig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('firesmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('fireskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (firedbigdsmalld == Firedskulld) {
    if (Firedbigd + Firedsmalld + Firedskulld == 0) {
      document.getElementById('firebig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('firesmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('fireskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('firebig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('firesmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('fireskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (firedbigdskulld == Firedsmalld) {
      if (Firedbigd + Firedsmalld + Firedskulld == 0) {
        document.getElementById('firebig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('firesmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('fireskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('firebig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('firesmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('fireskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (firedsmalldskulld == Firedbigd) {
        if (Firedbigd + Firedsmalld + Firedskulld == 0) {
          document.getElementById('firebig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('firesmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('fireskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('firebig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('firesmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('fireskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('firebig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('firesmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('fireskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

  ///numerator code
  if (Firebig + Firesmall + Fireskull !== 0) {
    if (Firebig === Firedbigd) {
      if (Firesmall === Firedsmalld) {
        if (Fireskull === Firedskulld) {
          if (firedbigdsmalld == Firedskulld) {
            document.getElementById('firebig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('firesmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('fireskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (firedbigdskulld == Firedsmalld) {
              document.getElementById('firebig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('firesmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('fireskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (firedsmalldskulld == Firedbigd) {
                document.getElementById('firebig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('firesmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('fireskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

/////

function waterrow() {

  //variable definitions
  var Waterbig;
  Waterbig = parseInt(document.getElementById("waterbig").value || 0);
  var Watersmall;
  Watersmall = parseInt(document.getElementById("watersmall").value || 0);
  var Waterskull;
  Waterskull = parseInt(document.getElementById("waterskull").value || 0);

  var Waterdbigd;
  Waterdbigd = parseInt(document.getElementById("waterdbigd").value || 0);
  var Waterdsmalld;
  Waterdsmalld = parseInt(document.getElementById("waterdsmalld").value || 0);
  var Waterdskulld;
  Waterdskulld = parseInt(document.getElementById("waterdskulld").value || 0);

  var waterbigsmall = Waterbig + Watersmall;
  var waterbigskull = Waterbig + Waterskull;
  var watersmallskull = Watersmall + Waterskull;
  var waterbigsmallskull = Waterbig + Watersmall + Waterskull;

  var waterdbigdsmalld = Waterdbigd + Waterdsmalld;
  var waterdbigdskulld = Waterdbigd + Waterdskulld;
  var waterdsmalldskulld = Waterdsmalld + Waterdskulld;
  var waterdbigdsmalldskulld = Waterdbigd + Waterdsmalld + Waterdskulld;

  //snap numerator to be denominator
  document.getElementById("waterbig").max = Waterdbigd;
  document.getElementById("watersmall").max = Waterdsmalld;
  document.getElementById("waterskull").max = Waterdskulld;

  if (document.getElementById("waterbig").value > document.getElementById("waterbig").max) {
    document.getElementById("waterbig").value = document.getElementById("waterbig").max
  } else {}
  if (document.getElementById("watersmall").value > document.getElementById("watersmall").max) {
    document.getElementById("watersmall").value = document.getElementById("watersmall").max
  } else {}
  if (document.getElementById("waterskull").value > document.getElementById("waterskull").max) {
    document.getElementById("waterskull").value = document.getElementById("waterskull").max
  } else {}

  //snap denominator to max because max doesnt do its job sometimes
  if (Waterdbigd.value > Waterdbigd.max) {
    Waterdbigd.value = Waterdbigd.max
  } else {}
  if (Waterdsmalld.value > Waterdsmalld.max) {
    Waterdsmalld.value = Waterdsmalld.max
  } else {}
  if (Waterdskulld.value > Waterdskulld.max) {
    Waterdskulld.value = Waterdskulld.max
  } else {}
  //

  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Waterbig + Watersmall + Waterskull + Waterdbigd + Waterdsmalld + Waterdskulld == 0) {
    document.getElementById('waterbig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('watersmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('waterskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (waterdbigdsmalld == Waterdskulld) {
    if (Waterdbigd + Waterdsmalld + Waterdskulld == 0) {
      document.getElementById('waterbig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('watersmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('waterskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('waterbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('watersmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('waterskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (waterdbigdskulld == Waterdsmalld) {
      if (Waterdbigd + Waterdsmalld + Waterdskulld == 0) {
        document.getElementById('waterbig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('watersmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('waterskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('waterbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('watersmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('waterskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (waterdsmalldskulld == Waterdbigd) {
        if (Waterdbigd + Waterdsmalld + Waterdskulld == 0) {
          document.getElementById('waterbig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('watersmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('waterskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('waterbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('watersmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('waterskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('waterbig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('watersmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('waterskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

  ///numerator code
  if (Waterbig + Watersmall + Waterskull !== 0) {
    if (Waterbig === Waterdbigd) {
      if (Watersmall === Waterdsmalld) {
        if (Waterskull === Waterdskulld) {
          if (waterdbigdsmalld == Waterdskulld) {
            document.getElementById('waterbig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('watersmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('waterskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (waterdbigdskulld == Waterdsmalld) {
              document.getElementById('waterbig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('watersmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('waterskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (waterdsmalldskulld == Waterdbigd) {
                document.getElementById('waterbig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('watersmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('waterskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

/////

function shadowrow() {

  //variable definitions
  var Shadowbig;
  Shadowbig = parseInt(document.getElementById("shadowbig").value || 0);
  var Shadowsmall;
  Shadowsmall = parseInt(document.getElementById("shadowsmall").value || 0);
  var Shadowskull;
  Shadowskull = parseInt(document.getElementById("shadowskull").value || 0);

  var Shadowdbigd;
  Shadowdbigd = parseInt(document.getElementById("shadowdbigd").value || 0);
  var Shadowdsmalld;
  Shadowdsmalld = parseInt(document.getElementById("shadowdsmalld").value || 0);
  var Shadowdskulld;
  Shadowdskulld = parseInt(document.getElementById("shadowdskulld").value || 0);

  var shadowbigsmall = Shadowbig + Shadowsmall;
  var shadowbigskull = Shadowbig + Shadowskull;
  var shadowsmallskull = Shadowsmall + Shadowskull;
  var shadowbigsmallskull = Shadowbig + Shadowsmall + Shadowskull;

  var shadowdbigdsmalld = Shadowdbigd + Shadowdsmalld;
  var shadowdbigdskulld = Shadowdbigd + Shadowdskulld;
  var shadowdsmalldskulld = Shadowdsmalld + Shadowdskulld;
  var shadowdbigdsmalldskulld = Shadowdbigd + Shadowdsmalld + Shadowdskulld;

  //snap numerator to be denominator
  document.getElementById("shadowbig").max = Shadowdbigd;
  document.getElementById("shadowsmall").max = Shadowdsmalld;
  document.getElementById("shadowskull").max = Shadowdskulld;

  if (document.getElementById("shadowbig").value > document.getElementById("shadowbig").max) {
    document.getElementById("shadowbig").value = document.getElementById("shadowbig").max
  } else {}
  if (document.getElementById("shadowsmall").value > document.getElementById("shadowsmall").max) {
    document.getElementById("shadowsmall").value = document.getElementById("shadowsmall").max
  } else {}
  if (document.getElementById("shadowskull").value > document.getElementById("shadowskull").max) {
    document.getElementById("shadowskull").value = document.getElementById("shadowskull").max
  } else {}

  //snap denominator to max because max doesnt do its job sometimes
  if (Shadowdbigd.value > Shadowdbigd.max) {
    Shadowdbigd.value = Shadowdbigd.max
  } else {}
  if (Shadowdsmalld.value > Shadowdsmalld.max) {
    Shadowdsmalld.value = Shadowdsmalld.max
  } else {}
  if (Shadowdskulld.value > Shadowdskulld.max) {
    Shadowdskulld.value = Shadowdskulld.max
  } else {}
  //

  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Shadowbig + Shadowsmall + Shadowskull + Shadowdbigd + Shadowdsmalld + Shadowdskulld == 0) {
    document.getElementById('shadowbig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('shadowsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('shadowskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (shadowdbigdsmalld == Shadowdskulld) {
    if (Shadowdbigd + Shadowdsmalld + Shadowdskulld == 0) {
      document.getElementById('shadowbig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('shadowsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('shadowskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('shadowbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('shadowsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('shadowskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (shadowdbigdskulld == Shadowdsmalld) {
      if (Shadowdbigd + Shadowdsmalld + Shadowdskulld == 0) {
        document.getElementById('shadowbig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('shadowsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('shadowskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('shadowbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('shadowsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('shadowskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (shadowdsmalldskulld == Shadowdbigd) {
        if (Shadowdbigd + Shadowdsmalld + Shadowdskulld == 0) {
          document.getElementById('shadowbig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('shadowsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('shadowskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('shadowbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('shadowsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('shadowskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('shadowbig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('shadowsmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('shadowskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

  ///numerator code
  if (Shadowbig + Shadowsmall + Shadowskull !== 0) {
    if (Shadowbig === Shadowdbigd) {
      if (Shadowsmall === Shadowdsmalld) {
        if (Shadowskull === Shadowdskulld) {
          if (shadowdbigdsmalld == Shadowdskulld) {
            document.getElementById('shadowbig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('shadowsmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('shadowskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (shadowdbigdskulld == Shadowdsmalld) {
              document.getElementById('shadowbig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('shadowsmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('shadowskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (shadowdsmalldskulld == Shadowdbigd) {
                document.getElementById('shadowbig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('shadowsmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('shadowskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

/////

function spiritrow() {

  //variable definitions
  var Spiritbig;
  Spiritbig = parseInt(document.getElementById("spiritbig").value || 0);
  var Spiritsmall;
  Spiritsmall = parseInt(document.getElementById("spiritsmall").value || 0);
  var Spiritskull;
  Spiritskull = parseInt(document.getElementById("spiritskull").value || 0);

  var Spiritdbigd;
  Spiritdbigd = parseInt(document.getElementById("spiritdbigd").value || 0);
  var Spiritdsmalld;
  Spiritdsmalld = parseInt(document.getElementById("spiritdsmalld").value || 0);
  var Spiritdskulld;
  Spiritdskulld = parseInt(document.getElementById("spiritdskulld").value || 0);

  var spiritbigsmall = Spiritbig + Spiritsmall;
  var spiritbigskull = Spiritbig + Spiritskull;
  var spiritsmallskull = Spiritsmall + Spiritskull;
  var spiritbigsmallskull = Spiritbig + Spiritsmall + Spiritskull;

  var spiritdbigdsmalld = Spiritdbigd + Spiritdsmalld;
  var spiritdbigdskulld = Spiritdbigd + Spiritdskulld;
  var spiritdsmalldskulld = Spiritdsmalld + Spiritdskulld;
  var spiritdbigdsmalldskulld = Spiritdbigd + Spiritdsmalld + Spiritdskulld;

  //snap numerator to be denominator
  document.getElementById("spiritbig").max = Spiritdbigd;
  document.getElementById("spiritsmall").max = Spiritdsmalld;
  document.getElementById("spiritskull").max = Spiritdskulld;

  if (document.getElementById("spiritbig").value > document.getElementById("spiritbig").max) {
    document.getElementById("spiritbig").value = document.getElementById("spiritbig").max
  } else {}
  if (document.getElementById("spiritsmall").value > document.getElementById("spiritsmall").max) {
    document.getElementById("spiritsmall").value = document.getElementById("spiritsmall").max
  } else {}
  if (document.getElementById("spiritskull").value > document.getElementById("spiritskull").max) {
    document.getElementById("spiritskull").value = document.getElementById("spiritskull").max
  } else {}


  //snap denominator to max because max doesnt do its job sometimes
  if (Spiritdbigd.value > Spiritdbigd.max) {
    Spiritdbigd.value = Spiritdbigd.max
  } else {}
  if (Spiritdsmalld.value > Spiritdsmalld.max) {
    Spiritdsmalld.value = Spiritdsmalld.max
  } else {}
  if (Spiritdskulld.value > Spiritdskulld.max) {
    Spiritdskulld.value = Spiritdskulld.max
  } else {}
  //

  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Spiritbig + Spiritsmall + Spiritskull + Spiritdbigd + Spiritdsmalld + Spiritdskulld == 0) {
    document.getElementById('spiritbig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('spiritsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('spiritskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (spiritdbigdsmalld == Spiritdskulld) {
    if (Spiritdbigd + Spiritdsmalld + Spiritdskulld == 0) {
      document.getElementById('spiritbig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('spiritsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('spiritskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('spiritbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('spiritsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('spiritskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (spiritdbigdskulld == Spiritdsmalld) {
      if (Spiritdbigd + Spiritdsmalld + Spiritdskulld == 0) {
        document.getElementById('spiritbig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('spiritsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('spiritskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('spiritbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('spiritsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('spiritskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (spiritdsmalldskulld == Spiritdbigd) {
        if (Spiritdbigd + Spiritdsmalld + Spiritdskulld == 0) {
          document.getElementById('spiritbig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('spiritsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('spiritskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('spiritbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('spiritsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('spiritskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('spiritbig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('spiritsmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('spiritskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

  ///numerator code
  if (Spiritbig + Spiritsmall + Spiritskull !== 0) {
    if (Spiritbig === Spiritdbigd) {
      if (Spiritsmall === Spiritdsmalld) {
        if (Spiritskull === Spiritdskulld) {
          if (spiritdbigdsmalld == Spiritdskulld) {
            document.getElementById('spiritbig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('spiritsmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('spiritskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (spiritdbigdskulld == Spiritdsmalld) {
              document.getElementById('spiritbig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('spiritsmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('spiritskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (spiritdsmalldskulld == Spiritdbigd) {
                document.getElementById('spiritbig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('spiritsmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('spiritskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

/////

function botwrow() {

  //variable definitions
  var Botwbig;
  Botwbig = parseInt(document.getElementById("botwbig").value || 0);
  var Botwsmall;
  Botwsmall = parseInt(document.getElementById("botwsmall").value || 0);
  var Botwskull;
  Botwskull = parseInt(document.getElementById("botwskull").value || 0);

  var Botwdbigd;
  Botwdbigd = parseInt(document.getElementById("botwdbigd").value || 0);
  var Botwdsmalld;
  Botwdsmalld = parseInt(document.getElementById("botwdsmalld").value || 0);
  var Botwdskulld;
  Botwdskulld = parseInt(document.getElementById("botwdskulld").value || 0);

  var botwbigsmall = Botwbig + Botwsmall;
  var botwbigskull = Botwbig + Botwskull;
  var botwsmallskull = Botwsmall + Botwskull;
  var botwbigsmallskull = Botwbig + Botwsmall + Botwskull;

  var botwdbigdsmalld = Botwdbigd + Botwdsmalld;
  var botwdbigdskulld = Botwdbigd + Botwdskulld;
  var botwdsmalldskulld = Botwdsmalld + Botwdskulld;
  var botwdbigdsmalldskulld = Botwdbigd + Botwdsmalld + Botwdskulld;

  //snap numerator to be denominator
  document.getElementById("botwbig").max = Botwdbigd;
  document.getElementById("botwsmall").max = Botwdsmalld;
  document.getElementById("botwskull").max = Botwdskulld;

  if (document.getElementById("botwbig").value > document.getElementById("botwbig").max) {
    document.getElementById("botwbig").value = document.getElementById("botwbig").max
  } else {}
  if (document.getElementById("botwsmall").value > document.getElementById("botwsmall").max) {
    document.getElementById("botwsmall").value = document.getElementById("botwsmall").max
  } else {}
  if (document.getElementById("botwskull").value > document.getElementById("botwskull").max) {
    document.getElementById("botwskull").value = document.getElementById("botwskull").max
  } else {}


  //snap denominator to max because max doesnt do its job sometimes
  if (Botwdbigd.value > Botwdbigd.max) {
    Botwdbigd.value = Botwdbigd.max
  } else {}
  if (Botwdsmalld.value > Botwdsmalld.max) {
    Botwdsmalld.value = Botwdsmalld.max
  } else {}
  if (Botwdskulld.value > Botwdskulld.max) {
    Botwdskulld.value = Botwdskulld.max
  } else {}
  //

  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Botwbig + Botwsmall + Botwskull + Botwdbigd + Botwdsmalld + Botwdskulld == 0) {
    document.getElementById('botwbig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('botwsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('botwskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (botwdbigdsmalld == Botwdskulld) {
    if (Botwdbigd + Botwdsmalld + Botwdskulld == 0) {
      document.getElementById('botwbig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('botwsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('botwskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('botwbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('botwsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('botwskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (botwdbigdskulld == Botwdsmalld) {
      if (Botwdbigd + Botwdsmalld + Botwdskulld == 0) {
        document.getElementById('botwbig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('botwsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('botwskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('botwbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('botwsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('botwskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (botwdsmalldskulld == Botwdbigd) {
        if (Botwdbigd + Botwdsmalld + Botwdskulld == 0) {
          document.getElementById('botwbig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('botwsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('botwskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('botwbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('botwsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('botwskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('botwbig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('botwsmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('botwskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

  ///numerator code
  if (Botwbig + Botwsmall + Botwskull !== 0) {
    if (Botwbig === Botwdbigd) {
      if (Botwsmall === Botwdsmalld) {
        if (Botwskull === Botwdskulld) {
          if (botwdbigdsmalld == Botwdskulld) {
            document.getElementById('botwbig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('botwsmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('botwskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (botwdbigdskulld == Botwdsmalld) {
              document.getElementById('botwbig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('botwsmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('botwskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (botwdsmalldskulld == Botwdbigd) {
                document.getElementById('botwbig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('botwsmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('botwskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

/////

function icrow() {

  //variable definitions
  var Icbig;
  Icbig = parseInt(document.getElementById("icbig").value || 0);
  var Icsmall;
  Icsmall = parseInt(document.getElementById("icsmall").value || 0);
  var Icskull;
  Icskull = parseInt(document.getElementById("icskull").value || 0);

  var Icdbigd;
  Icdbigd = parseInt(document.getElementById("icdbigd").value || 0);
  var Icdsmalld;
  Icdsmalld = parseInt(document.getElementById("icdsmalld").value || 0);
  var Icdskulld;
  Icdskulld = parseInt(document.getElementById("icdskulld").value || 0);

  var icbigsmall = Icbig + Icsmall;
  var icbigskull = Icbig + Icskull;
  var icsmallskull = Icsmall + Icskull;
  var icbigsmallskull = Icbig + Icsmall + Icskull;

  var icdbigdsmalld = Icdbigd + Icdsmalld;
  var icdbigdskulld = Icdbigd + Icdskulld;
  var icdsmalldskulld = Icdsmalld + Icdskulld;
  var icdbigdsmalldskulld = Icdbigd + Icdsmalld + Icdskulld;

  //snap numerator to be denominator
  document.getElementById("icbig").max = Icdbigd;
  document.getElementById("icsmall").max = Icdsmalld;
  document.getElementById("icskull").max = Icdskulld;

  if (document.getElementById("icbig").value > document.getElementById("icbig").max) {
    document.getElementById("icbig").value = document.getElementById("icbig").max
  } else {}
  if (document.getElementById("icsmall").value > document.getElementById("icsmall").max) {
    document.getElementById("icsmall").value = document.getElementById("icsmall").max
  } else {}
  if (document.getElementById("icskull").value > document.getElementById("icskull").max) {
    document.getElementById("icskull").value = document.getElementById("icskull").max
  } else {}

  //snap denominator to max because max doesnt do its job sometimes
  if (Icdbigd.value > Icdbigd.max) {
    Icdbigd.value = Icdbigd.max
  } else {}
  if (Icdsmalld.value > Icdsmalld.max) {
    Icdsmalld.value = Icdsmalld.max
  } else {}
  if (Icdskulld.value > Icdskulld.max) {
    Icdskulld.value = Icdskulld.max
  } else {}
  //

  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Icbig + Icsmall + Icskull + Icdbigd + Icdsmalld + Icdskulld == 0) {
    document.getElementById('icbig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('icsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('icskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (icdbigdsmalld == Icdskulld) {
    if (Icdbigd + Icdsmalld + Icdskulld == 0) {
      document.getElementById('icbig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('icsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('icskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('icbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('icsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('icskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (icdbigdskulld == Icdsmalld) {
      if (Icdbigd + Icdsmalld + Icdskulld == 0) {
        document.getElementById('icbig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('icsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('icskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('icbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('icsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('icskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (icdsmalldskulld == Icdbigd) {
        if (Icdbigd + Icdsmalld + Icdskulld == 0) {
          document.getElementById('icbig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('icsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('icskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('icbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('icsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('icskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('icbig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('icsmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('icskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

  ///numerator code
  if (Icbig + Icsmall + Icskull !== 0) {
    if (Icbig === Icdbigd) {
      if (Icsmall === Icdsmalld) {
        if (Icskull === Icdskulld) {
          if (icdbigdsmalld == Icdskulld) {
            document.getElementById('icbig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('icsmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('icskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (icdbigdskulld == Icdsmalld) {
              document.getElementById('icbig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('icsmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('icskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (icdsmalldskulld == Icdbigd) {
                document.getElementById('icbig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('icsmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('icskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

/////

function gtgrow() {

  //variable definitions
  var Gtgbig;
  Gtgbig = parseInt(document.getElementById("gtgbig").value || 0);
  var Gtgsmall;
  Gtgsmall = parseInt(document.getElementById("gtgsmall").value || 0);
  var Gtgskull;
  Gtgskull = parseInt(document.getElementById("gtgskull").value || 0);

  var Gtgdbigd;
  Gtgdbigd = parseInt(document.getElementById("gtgdbigd").value || 0);
  var Gtgdsmalld;
  Gtgdsmalld = parseInt(document.getElementById("gtgdsmalld").value || 0);
  var Gtgdskulld;
  Gtgdskulld = parseInt(document.getElementById("gtgdskulld").value || 0);

  var gtgbigsmall = Gtgbig + Gtgsmall;
  var gtgbigskull = Gtgbig + Gtgskull;
  var gtgsmallskull = Gtgsmall + Gtgskull;
  var gtgbigsmallskull = Gtgbig + Gtgsmall + Gtgskull;

  var gtgdbigdsmalld = Gtgdbigd + Gtgdsmalld;
  var gtgdbigdskulld = Gtgdbigd + Gtgdskulld;
  var gtgdsmalldskulld = Gtgdsmalld + Gtgdskulld;
  var gtgdbigdsmalldskulld = Gtgdbigd + Gtgdsmalld + Gtgdskulld;

  //snap numerator to be denominator
  document.getElementById("gtgbig").max = Gtgdbigd;
  document.getElementById("gtgsmall").max = Gtgdsmalld;
  document.getElementById("gtgskull").max = Gtgdskulld;

  if (document.getElementById("gtgbig").value > document.getElementById("gtgbig").max) {
    document.getElementById("gtgbig").value = document.getElementById("gtgbig").max
  } else {}
  if (document.getElementById("gtgsmall").value > document.getElementById("gtgsmall").max) {
    document.getElementById("gtgsmall").value = document.getElementById("gtgsmall").max
  } else {}
  if (document.getElementById("gtgskull").value > document.getElementById("gtgskull").max) {
    document.getElementById("gtgskull").value = document.getElementById("gtgskull").max
  } else {}

  //snap denominator to max because max doesnt do its job sometimes
  if (Gtgdbigd.value > Gtgdbigd.max) {
    Gtgdbigd.value = Gtgdbigd.max
  } else {}
  if (Gtgdsmalld.value > Gtgdsmalld.max) {
    Gtgdsmalld.value = Gtgdsmalld.max
  } else {}
  if (Gtgdskulld.value > Gtgdskulld.max) {
    Gtgdskulld.value = Gtgdskulld.max
  } else {}
  //

  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Gtgbig + Gtgsmall + Gtgskull + Gtgdbigd + Gtgdsmalld + Gtgdskulld == 0) {
    document.getElementById('gtgbig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('gtgsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('gtgskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (gtgdbigdsmalld == Gtgdskulld) {
    if (Gtgdbigd + Gtgdsmalld + Gtgdskulld == 0) {
      document.getElementById('gtgbig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('gtgsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('gtgskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('gtgbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('gtgsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('gtgskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (gtgdbigdskulld == Gtgdsmalld) {
      if (Gtgdbigd + Gtgdsmalld + Gtgdskulld == 0) {
        document.getElementById('gtgbig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('gtgsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('gtgskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('gtgbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('gtgsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('gtgskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (gtgdsmalldskulld == Gtgdbigd) {
        if (Gtgdbigd + Gtgdsmalld + Gtgdskulld == 0) {
          document.getElementById('gtgbig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('gtgsmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('gtgskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('gtgbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('gtgsmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('gtgskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('gtgbig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('gtgsmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('gtgskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

  ///numerator code
  if (Gtgbig + Gtgsmall + Gtgskull !== 0) {
    if (Gtgbig === Gtgdbigd) {
      if (Gtgsmall === Gtgdsmalld) {
        if (Gtgskull === Gtgdskulld) {
          if (gtgdbigdsmalld == Gtgdskulld) {
            document.getElementById('gtgbig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('gtgsmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('gtgskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (gtgdbigdskulld == Gtgdsmalld) {
              document.getElementById('gtgbig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('gtgsmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('gtgskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (gtgdsmalldskulld == Gtgdbigd) {
                document.getElementById('gtgbig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('gtgsmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('gtgskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

/////

function ganonsrow() {

  //variable definitions
  var Ganonsbig;
  Ganonsbig = parseInt(document.getElementById("ganonsbig").value || 0);
  var Ganonssmall;
  Ganonssmall = parseInt(document.getElementById("ganonssmall").value || 0);
  var Ganonsskull;
  Ganonsskull = parseInt(document.getElementById("ganonsskull").value || 0);

  var Ganonsdbigd;
  Ganonsdbigd = parseInt(document.getElementById("ganonsdbigd").value || 0);
  var Ganonsdsmalld;
  Ganonsdsmalld = parseInt(document.getElementById("ganonsdsmalld").value || 0);
  var Ganonsdskulld;
  Ganonsdskulld = parseInt(document.getElementById("ganonsdskulld").value || 0);

  var ganonsbigsmall = Ganonsbig + Ganonssmall;
  var ganonsbigskull = Ganonsbig + Ganonsskull;
  var ganonssmallskull = Ganonssmall + Ganonsskull;
  var ganonsbigsmallskull = Ganonsbig + Ganonssmall + Ganonsskull;

  var ganonsdbigdsmalld = Ganonsdbigd + Ganonsdsmalld;
  var ganonsdbigdskulld = Ganonsdbigd + Ganonsdskulld;
  var ganonsdsmalldskulld = Ganonsdsmalld + Ganonsdskulld;
  var ganonsdbigdsmalldskulld = Ganonsdbigd + Ganonsdsmalld + Ganonsdskulld;

  //snap numerator to be denominator
  document.getElementById("ganonsbig").max = Ganonsdbigd;
  document.getElementById("ganonssmall").max = Ganonsdsmalld;
  document.getElementById("ganonsskull").max = Ganonsdskulld;

  if (document.getElementById("ganonsbig").value > document.getElementById("ganonsbig").max) {
    document.getElementById("ganonsbig").value = document.getElementById("ganonsbig").max
  } else {}
  if (document.getElementById("ganonssmall").value > document.getElementById("ganonssmall").max) {
    document.getElementById("ganonssmall").value = document.getElementById("ganonssmall").max
  } else {}
  if (document.getElementById("ganonsskull").value > document.getElementById("ganonsskull").max) {
    document.getElementById("ganonsskull").value = document.getElementById("ganonsskull").max
  } else {}

  //snap denominator to max because max doesnt do its job sometimes
  if (Ganonsdbigd.value > Ganonsdbigd.max) {
    Ganonsdbigd.value = Ganonsdbigd.max
  } else {}
  if (Ganonsdsmalld.value > Ganonsdsmalld.max) {
    Ganonsdsmalld.value = Ganonsdsmalld.max
  } else {}
  if (Ganonsdskulld.value > Ganonsdskulld.max) {
    Ganonsdskulld.value = Ganonsdskulld.max
  } else {}
  //

  //uncolor 0/0 , 0/0, 0/0 pairs just in case
  if (Ganonsbig + Ganonssmall + Ganonsskull + Ganonsdbigd + Ganonsdsmalld + Ganonsdskulld == 0) {
    document.getElementById('ganonsbig').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('ganonssmall').parentElement.parentElement.style.backgroundColor = 'transparent'
    document.getElementById('ganonsskull').parentElement.parentElement.style.backgroundColor = 'transparent'
  } else {}
  //

  //denominator code
  if (ganonsdbigdsmalld == Ganonsdskulld) {
    if (Ganonsdbigd + Ganonsdsmalld + Ganonsdskulld == 0) {
      document.getElementById('ganonsbig').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('ganonssmall').parentElement.parentElement.style.backgroundColor = 'transparent'
      document.getElementById('ganonsskull').parentElement.parentElement.style.backgroundColor = 'transparent'
    } else {
      document.getElementById('ganonsbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('ganonssmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
      document.getElementById('ganonsskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
    }
  } else {
    if (ganonsdbigdskulld == Ganonsdsmalld) {
      if (Ganonsdbigd + Ganonsdsmalld + Ganonsdskulld == 0) {
        document.getElementById('ganonsbig').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('ganonssmall').parentElement.parentElement.style.backgroundColor = 'transparent'
        document.getElementById('ganonsskull').parentElement.parentElement.style.backgroundColor = 'transparent'
      } else {
        document.getElementById('ganonsbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('ganonssmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
        document.getElementById('ganonsskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
      }
    } else {
      if (ganonsdsmalldskulld == Ganonsdbigd) {
        if (Ganonsdbigd + Ganonsdsmalld + Ganonsdskulld == 0) {
          document.getElementById('ganonsbig').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('ganonssmall').parentElement.parentElement.style.backgroundColor = 'transparent'
          document.getElementById('ganonsskull').parentElement.parentElement.style.backgroundColor = 'transparent'
        } else {
          document.getElementById('ganonsbig').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('ganonssmall').parentElement.parentElement.style.backgroundColor = '#44bd60'
          document.getElementById('ganonsskull').parentElement.parentElement.style.backgroundColor = '#44bd60'
        }
      } else {
        document.getElementById('ganonsbig').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('ganonssmall').parentElement.parentElement.style.backgroundColor = '#bd5244'
        document.getElementById('ganonsskull').parentElement.parentElement.style.backgroundColor = '#bd5244'
      }
    }
  }

  ///numerator code
  if (Ganonsbig + Ganonssmall + Ganonsskull !== 0) {
    if (Ganonsbig === Ganonsdbigd) {
      if (Ganonssmall === Ganonsdsmalld) {
        if (Ganonsskull === Ganonsdskulld) {
          if (ganonsdbigdsmalld == Ganonsdskulld) {
            document.getElementById('ganonsbig').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('ganonssmall').parentElement.parentElement.style.backgroundColor = 'green'
            document.getElementById('ganonsskull').parentElement.parentElement.style.backgroundColor = 'green'
          } else {
            if (ganonsdbigdskulld == Ganonsdsmalld) {
              document.getElementById('ganonsbig').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('ganonssmall').parentElement.parentElement.style.backgroundColor = 'green'
              document.getElementById('ganonsskull').parentElement.parentElement.style.backgroundColor = 'green'
            } else {
              if (ganonsdsmalldskulld == Ganonsdbigd) {
                document.getElementById('ganonsbig').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('ganonssmall').parentElement.parentElement.style.backgroundColor = 'green'
                document.getElementById('ganonsskull').parentElement.parentElement.style.backgroundColor = 'green'
              } else {}
            }
          }
        } else {}
      } else {}
    } else {}
  } else {}
}

/////

function verticalsum() {

  var Dekubig;
  Dekubig = parseInt(document.getElementById("dekubig").value || 0);
  var Dekusmall;
  Dekusmall = parseInt(document.getElementById("dekusmall").value || 0);
  var Dekuskull;
  Dekuskull = parseInt(document.getElementById("dekuskull").value || 0);

  var Dekudbigd;
  Dekudbigd = parseInt(document.getElementById("dekudbigd").value || 0);
  var Dekudsmalld;
  Dekudsmalld = parseInt(document.getElementById("dekudsmalld").value || 0);
  var Dekudskulld;
  Dekudskulld = parseInt(document.getElementById("dekudskulld").value || 0);

  var Dcbig;
  Dcbig = parseInt(document.getElementById("dcbig").value || 0);
  var Dcsmall;
  Dcsmall = parseInt(document.getElementById("dcsmall").value || 0);
  var Dcskull;
  Dcskull = parseInt(document.getElementById("dcskull").value || 0);

  var Dcdbigd;
  Dcdbigd = parseInt(document.getElementById("dcdbigd").value || 0);
  var Dcdsmalld;
  Dcdsmalld = parseInt(document.getElementById("dcdsmalld").value || 0);
  var Dcdskulld;
  Dcdskulld = parseInt(document.getElementById("dcdskulld").value || 0);

  var Jabubig;
  Jabubig = parseInt(document.getElementById("jabubig").value || 0);
  var Jabusmall;
  Jabusmall = parseInt(document.getElementById("jabusmall").value || 0);
  var Jabuskull;
  Jabuskull = parseInt(document.getElementById("jabuskull").value || 0);

  var Jabudbigd;
  Jabudbigd = parseInt(document.getElementById("jabudbigd").value || 0);
  var Jabudsmalld;
  Jabudsmalld = parseInt(document.getElementById("jabudsmalld").value || 0);
  var Jabudskulld;
  Jabudskulld = parseInt(document.getElementById("jabudskulld").value || 0);

  var Forestbig;
  Forestbig = parseInt(document.getElementById("forestbig").value || 0);
  var Forestsmall;
  Forestsmall = parseInt(document.getElementById("forestsmall").value || 0);
  var Forestskull;
  Forestskull = parseInt(document.getElementById("forestskull").value || 0);

  var Forestdbigd;
  Forestdbigd = parseInt(document.getElementById("forestdbigd").value || 0);
  var Forestdsmalld;
  Forestdsmalld = parseInt(document.getElementById("forestdsmalld").value || 0);
  var Forestdskulld;
  Forestdskulld = parseInt(document.getElementById("forestdskulld").value || 0);

  var Firebig;
  Firebig = parseInt(document.getElementById("firebig").value || 0);
  var Firesmall;
  Firesmall = parseInt(document.getElementById("firesmall").value || 0);
  var Fireskull;
  Fireskull = parseInt(document.getElementById("fireskull").value || 0);

  var Firedbigd;
  Firedbigd = parseInt(document.getElementById("firedbigd").value || 0);
  var Firedsmalld;
  Firedsmalld = parseInt(document.getElementById("firedsmalld").value || 0);
  var Firedskulld;
  Firedskulld = parseInt(document.getElementById("firedskulld").value || 0);

  var Waterbig;
  Waterbig = parseInt(document.getElementById("waterbig").value || 0);
  var Watersmall;
  Watersmall = parseInt(document.getElementById("watersmall").value || 0);
  var Waterskull;
  Waterskull = parseInt(document.getElementById("waterskull").value || 0);

  var Waterdbigd;
  Waterdbigd = parseInt(document.getElementById("waterdbigd").value || 0);
  var Waterdsmalld;
  Waterdsmalld = parseInt(document.getElementById("waterdsmalld").value || 0);
  var Waterdskulld;
  Waterdskulld = parseInt(document.getElementById("waterdskulld").value || 0);

  var Shadowbig;
  Shadowbig = parseInt(document.getElementById("shadowbig").value || 0);
  var Shadowsmall;
  Shadowsmall = parseInt(document.getElementById("shadowsmall").value || 0);
  var Shadowskull;
  Shadowskull = parseInt(document.getElementById("shadowskull").value || 0);

  var Shadowdbigd;
  Shadowdbigd = parseInt(document.getElementById("shadowdbigd").value || 0);
  var Shadowdsmalld;
  Shadowdsmalld = parseInt(document.getElementById("shadowdsmalld").value || 0);
  var Shadowdskulld;
  Shadowdskulld = parseInt(document.getElementById("shadowdskulld").value || 0);

  var Spiritbig;
  Spiritbig = parseInt(document.getElementById("spiritbig").value || 0);
  var Spiritsmall;
  Spiritsmall = parseInt(document.getElementById("spiritsmall").value || 0);
  var Spiritskull;
  Spiritskull = parseInt(document.getElementById("spiritskull").value || 0);

  var Spiritdbigd;
  Spiritdbigd = parseInt(document.getElementById("spiritdbigd").value || 0);
  var Spiritdsmalld;
  Spiritdsmalld = parseInt(document.getElementById("spiritdsmalld").value || 0);
  var Spiritdskulld;
  Spiritdskulld = parseInt(document.getElementById("spiritdskulld").value || 0);

  var Botwbig;
  Botwbig = parseInt(document.getElementById("botwbig").value || 0);
  var Botwsmall;
  Botwsmall = parseInt(document.getElementById("botwsmall").value || 0);
  var Botwskull;
  Botwskull = parseInt(document.getElementById("botwskull").value || 0);

  var Botwdbigd;
  Botwdbigd = parseInt(document.getElementById("botwdbigd").value || 0);
  var Botwdsmalld;
  Botwdsmalld = parseInt(document.getElementById("botwdsmalld").value || 0);
  var Botwdskulld;
  Botwdskulld = parseInt(document.getElementById("botwdskulld").value || 0);

  var Icbig;
  Icbig = parseInt(document.getElementById("icbig").value || 0);
  var Icsmall;
  Icsmall = parseInt(document.getElementById("icsmall").value || 0);
  var Icskull;
  Icskull = parseInt(document.getElementById("icskull").value || 0);

  var Icdbigd;
  Icdbigd = parseInt(document.getElementById("icdbigd").value || 0);
  var Icdsmalld;
  Icdsmalld = parseInt(document.getElementById("icdsmalld").value || 0);
  var Icdskulld;
  Icdskulld = parseInt(document.getElementById("icdskulld").value || 0);

  var Gtgbig;
  Gtgbig = parseInt(document.getElementById("gtgbig").value || 0);
  var Gtgsmall;
  Gtgsmall = parseInt(document.getElementById("gtgsmall").value || 0);
  var Gtgskull;
  Gtgskull = parseInt(document.getElementById("gtgskull").value || 0);

  var Gtgdbigd;
  Gtgdbigd = parseInt(document.getElementById("gtgdbigd").value || 0);
  var Gtgdsmalld;
  Gtgdsmalld = parseInt(document.getElementById("gtgdsmalld").value || 0);
  var Gtgdskulld;
  Gtgdskulld = parseInt(document.getElementById("gtgdskulld").value || 0);

  var Ganonsbig;
  Ganonsbig = parseInt(document.getElementById("ganonsbig").value || 0);
  var Ganonssmall;
  Ganonssmall = parseInt(document.getElementById("ganonssmall").value || 0);
  var Ganonsskull;
  Ganonsskull = parseInt(document.getElementById("ganonsskull").value || 0);

  var Ganonsdbigd;
  Ganonsdbigd = parseInt(document.getElementById("ganonsdbigd").value || 0);
  var Ganonsdsmalld;
  Ganonsdsmalld = parseInt(document.getElementById("ganonsdsmalld").value || 0);
  var Ganonsdskulld;
  Ganonsdskulld = parseInt(document.getElementById("ganonsdskulld").value || 0);

  var Bigsum = Dekubig + Dcbig + Jabubig + Forestbig + Firebig + Waterbig + Shadowbig + Spiritbig + Botwbig + Icbig + Gtgbig + Ganonsbig;

  var Bigdsumd = Dekudbigd + Dcdbigd + Jabudbigd + Forestdbigd + Firedbigd + Waterdbigd + Shadowdbigd + Spiritdbigd + Botwdbigd + Icdbigd + Gtgdbigd + Ganonsdbigd;

  if (Dekubig + Dcbig + Jabubig + Forestbig + Firebig + Waterbig + Shadowbig + Spiritbig + Botwbig + Icbig + Gtgbig + Ganonsbig === 22) {
    document.getElementById('bigsum').innerText = Bigsum;
    document.getElementById('bigdsumd').innerText = Bigdsumd;
    document.getElementById('bigsumcell').style.backgroundColor = 'green';
  } else {}

  if (Dekudbigd + Dcdbigd + Jabudbigd + Forestdbigd + Firedbigd + Waterdbigd + Shadowdbigd + Spiritdbigd + Botwdbigd + Icdbigd + Gtgdbigd + Ganonsdbigd === 22) {

    if (Dekubig + Dcbig + Jabubig + Forestbig + Firebig + Waterbig + Shadowbig + Spiritbig + Botwbig + Icbig + Gtgbig + Ganonsbig === 22) {
      document.getElementById('bigsum').innerText = Bigsum;
      document.getElementById('bigdsumd').innerText = Bigdsumd;
      document.getElementById('bigsumcell').style.backgroundColor = 'green';

    } else {
      document.getElementById('bigsum').innerText = Bigsum;
      document.getElementById('bigdsumd').innerText = Bigdsumd;
      document.getElementById('bigsumcell').style.backgroundColor = '#44bd60';
    }
  } else {
    if (Dekudbigd + Dcdbigd + Jabudbigd + Forestdbigd + Firedbigd + Waterdbigd + Shadowdbigd + Spiritdbigd + Botwdbigd + Icdbigd + Gtgdbigd + Ganonsdbigd === 0) {
      document.getElementById('bigsum').innerText = Bigdsumd;
      document.getElementById('bigdsumd').innerText = Bigdsumd;
      document.getElementById('bigsumcell').style.backgroundColor = 'transparent';
    } else {
      document.getElementById('bigsum').innerText = Bigsum;
      document.getElementById('bigdsumd').innerText = Bigdsumd;
      document.getElementById('bigsumcell').style.backgroundColor = '#bd5244';
    }

  }

  var Smallsum = Dekusmall + Dcsmall + Jabusmall + Forestsmall + Firesmall + Watersmall + Shadowsmall + Spiritsmall + Botwsmall + Icsmall + Gtgsmall + Ganonssmall;

  var Smalldsumd = Dekudsmalld + Dcdsmalld + Jabudsmalld + Forestdsmalld + Firedsmalld + Waterdsmalld + Shadowdsmalld + Spiritdsmalld + Botwdsmalld + Icdsmalld + Gtgdsmalld + Ganonsdsmalld;

  if (Dekusmall + Dcsmall + Jabusmall + Forestsmall + Firesmall + Watersmall + Shadowsmall + Spiritsmall + Botwsmall + Icsmall + Gtgsmall + Ganonssmall === 22) {
    document.getElementById('smallsum').innerText = Smallsum;
    document.getElementById('smalldsumd').innerText = Smalldsumd;
    document.getElementById('smallsumcell').style.backgroundColor = 'green';
  } else {}

  if (Dekudsmalld + Dcdsmalld + Jabudsmalld + Forestdsmalld + Firedsmalld + Waterdsmalld + Shadowdsmalld + Spiritdsmalld + Botwdsmalld + Icdsmalld + Gtgdsmalld + Ganonsdsmalld === 22) {

    if (Dekusmall + Dcsmall + Jabusmall + Forestsmall + Firesmall + Watersmall + Shadowsmall + Spiritsmall + Botwsmall + Icsmall + Gtgsmall + Ganonssmall === 22) {
      document.getElementById('smallsum').innerText = Smallsum;
      document.getElementById('smalldsumd').innerText = Smalldsumd;
      document.getElementById('smallsumcell').style.backgroundColor = 'green';

    } else {
      document.getElementById('smallsum').innerText = Smallsum;
      document.getElementById('smalldsumd').innerText = Smalldsumd;
      document.getElementById('smallsumcell').style.backgroundColor = '#44bd60';
    }
  } else {
    if (Dekudsmalld + Dcdsmalld + Jabudsmalld + Forestdsmalld + Firedsmalld + Waterdsmalld + Shadowdsmalld + Spiritdsmalld + Botwdsmalld + Icdsmalld + Gtgdsmalld + Ganonsdsmalld === 0) {
      document.getElementById('smallsum').innerText = Smalldsumd;
      document.getElementById('smalldsumd').innerText = Smalldsumd;
      document.getElementById('smallsumcell').style.backgroundColor = 'transparent';
    } else {
      document.getElementById('smallsum').innerText = Smallsum;
      document.getElementById('smalldsumd').innerText = Smalldsumd;
      document.getElementById('smallsumcell').style.backgroundColor = '#bd5244';
    }

  }

  var Skullsum = Dekuskull + Dcskull + Jabuskull + Forestskull + Fireskull + Waterskull + Shadowskull + Spiritskull + Botwskull + Icskull + Gtgskull + Ganonsskull;

  var Skulldsumd = Dekudskulld + Dcdskulld + Jabudskulld + Forestdskulld + Firedskulld + Waterdskulld + Shadowdskulld + Spiritdskulld + Botwdskulld + Icdskulld + Gtgdskulld + Ganonsdskulld;

  if (Dekuskull + Dcskull + Jabuskull + Forestskull + Fireskull + Waterskull + Shadowskull + Spiritskull + Botwskull + Icskull + Gtgskull + Ganonsskull === 22) {
    document.getElementById('skullsum').innerText = Skullsum;
    document.getElementById('skulldsumd').innerText = Skulldsumd;
    document.getElementById('skullsumcell').style.backgroundColor = 'green';
  } else {}

  if (Dekudskulld + Dcdskulld + Jabudskulld + Forestdskulld + Firedskulld + Waterdskulld + Shadowdskulld + Spiritdskulld + Botwdskulld + Icdskulld + Gtgdskulld + Ganonsdskulld === 22) {

    if (Dekuskull + Dcskull + Jabuskull + Forestskull + Fireskull + Waterskull + Shadowskull + Spiritskull + Botwskull + Icskull + Gtgskull + Ganonsskull === 22) {
      document.getElementById('skullsum').innerText = Skullsum;
      document.getElementById('skulldsumd').innerText = Skulldsumd;
      document.getElementById('skullsumcell').style.backgroundColor = 'green';

    } else {
      document.getElementById('skullsum').innerText = Skullsum;
      document.getElementById('skulldsumd').innerText = Skulldsumd;
      document.getElementById('skullsumcell').style.backgroundColor = '#44bd60';
    }
  } else {
    if (Dekudskulld + Dcdskulld + Jabudskulld + Forestdskulld + Firedskulld + Waterdskulld + Shadowdskulld + Spiritdskulld + Botwdskulld + Icdskulld + Gtgdskulld + Ganonsdskulld === 0) {
      document.getElementById('skullsum').innerText = Skulldsumd;
      document.getElementById('skulldsumd').innerText = Skulldsumd;
      document.getElementById('skullsumcell').style.backgroundColor = 'transparent';
    } else {
      document.getElementById('skullsum').innerText = Skullsum;
      document.getElementById('skulldsumd').innerText = Skulldsumd;
      document.getElementById('skullsumcell').style.backgroundColor = '#bd5244';
    }

  }

}

function hiderows() {

  var Dekubig;
  Dekubig = parseInt(document.getElementById("dekubig").value ||0);
  var Dekusmall;
  Dekusmall = parseInt(document.getElementById("dekusmall").value ||0);
  var Dekuskull;
  Dekuskull = parseInt(document.getElementById("dekuskull").value ||0);

  var Dekudbigd;
  Dekudbigd = parseInt(document.getElementById("dekudbigd").value ||0);
  var Dekudsmalld;
  Dekudsmalld = parseInt(document.getElementById("dekudsmalld").value ||0);
  var Dekudskulld;
  Dekudskulld = parseInt(document.getElementById("dekudskulld").value ||0);

  var Dcbig;
  Dcbig = parseInt(document.getElementById("dcbig").value ||0);
  var Dcsmall;
  Dcsmall = parseInt(document.getElementById("dcsmall").value ||0);
  var Dcskull;
  Dcskull = parseInt(document.getElementById("dcskull").value ||0);

  var Dcdbigd;
  Dcdbigd = parseInt(document.getElementById("dcdbigd").value ||0);
  var Dcdsmalld;
  Dcdsmalld = parseInt(document.getElementById("dcdsmalld").value ||0);
  var Dcdskulld;
  Dcdskulld = parseInt(document.getElementById("dcdskulld").value ||0);

  var Jabubig;
  Jabubig = parseInt(document.getElementById("jabubig").value ||0);
  var Jabusmall;
  Jabusmall = parseInt(document.getElementById("jabusmall").value ||0);
  var Jabuskull;
  Jabuskull = parseInt(document.getElementById("jabuskull").value ||0);

  var Jabudbigd;
  Jabudbigd = parseInt(document.getElementById("jabudbigd").value ||0);
  var Jabudsmalld;
  Jabudsmalld = parseInt(document.getElementById("jabudsmalld").value ||0);
  var Jabudskulld;
  Jabudskulld = parseInt(document.getElementById("jabudskulld").value ||0);

  var Forestbig;
  Forestbig = parseInt(document.getElementById("forestbig").value ||0);
  var Forestsmall;
  Forestsmall = parseInt(document.getElementById("forestsmall").value ||0);
  var Forestskull;
  Forestskull = parseInt(document.getElementById("forestskull").value ||0);

  var Forestdbigd;
  Forestdbigd = parseInt(document.getElementById("forestdbigd").value ||0);
  var Forestdsmalld;
  Forestdsmalld = parseInt(document.getElementById("forestdsmalld").value ||0);
  var Forestdskulld;
  Forestdskulld = parseInt(document.getElementById("forestdskulld").value ||0);

  var Firebig;
  Firebig = parseInt(document.getElementById("firebig").value ||0);
  var Firesmall;
  Firesmall = parseInt(document.getElementById("firesmall").value ||0);
  var Fireskull;
  Fireskull = parseInt(document.getElementById("fireskull").value ||0);

  var Firedbigd;
  Firedbigd = parseInt(document.getElementById("firedbigd").value ||0);
  var Firedsmalld;
  Firedsmalld = parseInt(document.getElementById("firedsmalld").value ||0);
  var Firedskulld;
  Firedskulld = parseInt(document.getElementById("firedskulld").value ||0);

  var Waterbig;
  Waterbig = parseInt(document.getElementById("waterbig").value ||0);
  var Watersmall;
  Watersmall = parseInt(document.getElementById("watersmall").value ||0);
  var Waterskull;
  Waterskull = parseInt(document.getElementById("waterskull").value ||0);

  var Waterdbigd;
  Waterdbigd = parseInt(document.getElementById("waterdbigd").value ||0);
  var Waterdsmalld;
  Waterdsmalld = parseInt(document.getElementById("waterdsmalld").value ||0);
  var Waterdskulld;
  Waterdskulld = parseInt(document.getElementById("waterdskulld").value ||0);

  var Shadowbig;
  Shadowbig = parseInt(document.getElementById("shadowbig").value ||0);
  var Shadowsmall;
  Shadowsmall = parseInt(document.getElementById("shadowsmall").value ||0);
  var Shadowskull;
  Shadowskull = parseInt(document.getElementById("shadowskull").value ||0);

  var Shadowdbigd;
  Shadowdbigd = parseInt(document.getElementById("shadowdbigd").value ||0);
  var Shadowdsmalld;
  Shadowdsmalld = parseInt(document.getElementById("shadowdsmalld").value ||0);
  var Shadowdskulld;
  Shadowdskulld = parseInt(document.getElementById("shadowdskulld").value ||0);

  var Spiritbig;
  Spiritbig = parseInt(document.getElementById("spiritbig").value ||0);
  var Spiritsmall;
  Spiritsmall = parseInt(document.getElementById("spiritsmall").value ||0);
  var Spiritskull;
  Spiritskull = parseInt(document.getElementById("spiritskull").value ||0);

  var Spiritdbigd;
  Spiritdbigd = parseInt(document.getElementById("spiritdbigd").value ||0);
  var Spiritdsmalld;
  Spiritdsmalld = parseInt(document.getElementById("spiritdsmalld").value ||0);
  var Spiritdskulld;
  Spiritdskulld = parseInt(document.getElementById("spiritdskulld").value ||0);

  var Botwbig;
  Botwbig = parseInt(document.getElementById("botwbig").value ||0);
  var Botwsmall;
  Botwsmall = parseInt(document.getElementById("botwsmall").value ||0);
  var Botwskull;
  Botwskull = parseInt(document.getElementById("botwskull").value ||0);

  var Botwdbigd;
  Botwdbigd = parseInt(document.getElementById("botwdbigd").value ||0);
  var Botwdsmalld;
  Botwdsmalld = parseInt(document.getElementById("botwdsmalld").value ||0);
  var Botwdskulld;
  Botwdskulld = parseInt(document.getElementById("botwdskulld").value ||0);

  var Icbig;
  Icbig = parseInt(document.getElementById("icbig").value ||0);
  var Icsmall;
  Icsmall = parseInt(document.getElementById("icsmall").value ||0);
  var Icskull;
  Icskull = parseInt(document.getElementById("icskull").value ||0);

  var Icdbigd;
  Icdbigd = parseInt(document.getElementById("icdbigd").value ||0);
  var Icdsmalld;
  Icdsmalld = parseInt(document.getElementById("icdsmalld").value ||0);
  var Icdskulld;
  Icdskulld = parseInt(document.getElementById("icdskulld").value ||0);

  var Gtgbig;
  Gtgbig = parseInt(document.getElementById("gtgbig").value ||0);
  var Gtgsmall;
  Gtgsmall = parseInt(document.getElementById("gtgsmall").value ||0);
  var Gtgskull;
  Gtgskull = parseInt(document.getElementById("gtgskull").value ||0);

  var Gtgdbigd;
  Gtgdbigd = parseInt(document.getElementById("gtgdbigd").value ||0);
  var Gtgdsmalld;
  Gtgdsmalld = parseInt(document.getElementById("gtgdsmalld").value ||0);
  var Gtgdskulld;
  Gtgdskulld = parseInt(document.getElementById("gtgdskulld").value ||0);

  var Ganonsbig;
  Ganonsbig = parseInt(document.getElementById("ganonsbig").value ||0);
  var Ganonssmall;
  Ganonssmall = parseInt(document.getElementById("ganonssmall").value ||0);
  var Ganonsskull;
  Ganonsskull = parseInt(document.getElementById("ganonsskull").value ||0);

  var Ganonsdbigd;
  Ganonsdbigd = parseInt(document.getElementById("ganonsdbigd").value ||0);
  var Ganonsdsmalld;
  Ganonsdsmalld = parseInt(document.getElementById("ganonsdsmalld").value ||0);
  var Ganonsdskulld;
  Ganonsdskulld = parseInt(document.getElementById("ganonsdskulld").value ||0);

  if (Dekudbigd + Dekudsmalld + Dekudskulld === 0) {
    document.getElementById("dekurows").style.display = "none";
  } else {}

  if (Dcdbigd + Dcdsmalld + Dcdskulld === 0) {
    document.getElementById("dcrows").style.display = "none";
  } else {}

  if (Jabudbigd + Jabudsmalld + Jabudskulld === 0) {
    document.getElementById("jaburows").style.display = "none";
  } else {}

  if (Forestdbigd + Forestdsmalld + Forestdskulld === 0) {
    document.getElementById("forestrows").style.display = "none";
  } else {}

  if (Firedbigd + Firedsmalld + Firedskulld === 0) {
    document.getElementById("firerows").style.display = "none";
  } else {}

  if (Waterdbigd + Waterdsmalld + Waterdskulld === 0) {
    document.getElementById("waterrows").style.display = "none";
  } else {}

  if (Shadowdbigd + Shadowdsmalld + Shadowdskulld === 0) {
    document.getElementById("shadowrows").style.display = "none";
  } else {}

  if (Spiritdbigd + Spiritdsmalld + Spiritdskulld === 0) {
    document.getElementById("spiritrows").style.display = "none";
  } else {}

  if (Botwdbigd + Botwdsmalld + Botwdskulld === 0) {
    document.getElementById("botwrows").style.display = "none";
  } else {}

  if (Icdbigd + Icdsmalld + Icdskulld === 0) {
    document.getElementById("icrows").style.display = "none";
  } else {}

  if (Gtgdbigd + Gtgdsmalld + Gtgdskulld === 0) {
    document.getElementById("gtgrows").style.display = "none";
  } else {}

  if (Ganonsdbigd + Ganonsdsmalld + Ganonsdskulld === 0) {
    document.getElementById("ganonsrows").style.display = "none";
  } else {}

}

function unhiderows() {

  var Dekubig;
  Dekubig = parseInt(document.getElementById("dekubig").value);
  var Dekusmall;
  Dekusmall = parseInt(document.getElementById("dekusmall").value);
  var Dekuskull;
  Dekuskull = parseInt(document.getElementById("dekuskull").value);

  var Dekudbigd;
  Dekudbigd = parseInt(document.getElementById("dekudbigd").value);
  var Dekudsmalld;
  Dekudsmalld = parseInt(document.getElementById("dekudsmalld").value);
  var Dekudskulld;
  Dekudskulld = parseInt(document.getElementById("dekudskulld").value);

  var Dcbig;
  Dcbig = parseInt(document.getElementById("dcbig").value);
  var Dcsmall;
  Dcsmall = parseInt(document.getElementById("dcsmall").value);
  var Dcskull;
  Dcskull = parseInt(document.getElementById("dcskull").value);

  var Dcdbigd;
  Dcdbigd = parseInt(document.getElementById("dcdbigd").value);
  var Dcdsmalld;
  Dcdsmalld = parseInt(document.getElementById("dcdsmalld").value);
  var Dcdskulld;
  Dcdskulld = parseInt(document.getElementById("dcdskulld").value);

  var Jabubig;
  Jabubig = parseInt(document.getElementById("jabubig").value);
  var Jabusmall;
  Jabusmall = parseInt(document.getElementById("jabusmall").value);
  var Jabuskull;
  Jabuskull = parseInt(document.getElementById("jabuskull").value);

  var Jabudbigd;
  Jabudbigd = parseInt(document.getElementById("jabudbigd").value);
  var Jabudsmalld;
  Jabudsmalld = parseInt(document.getElementById("jabudsmalld").value);
  var Jabudskulld;
  Jabudskulld = parseInt(document.getElementById("jabudskulld").value);

  var Forestbig;
  Forestbig = parseInt(document.getElementById("forestbig").value);
  var Forestsmall;
  Forestsmall = parseInt(document.getElementById("forestsmall").value);
  var Forestskull;
  Forestskull = parseInt(document.getElementById("forestskull").value);

  var Forestdbigd;
  Forestdbigd = parseInt(document.getElementById("forestdbigd").value);
  var Forestdsmalld;
  Forestdsmalld = parseInt(document.getElementById("forestdsmalld").value);
  var Forestdskulld;
  Forestdskulld = parseInt(document.getElementById("forestdskulld").value);

  var Firebig;
  Firebig = parseInt(document.getElementById("firebig").value);
  var Firesmall;
  Firesmall = parseInt(document.getElementById("firesmall").value);
  var Fireskull;
  Fireskull = parseInt(document.getElementById("fireskull").value);

  var Firedbigd;
  Firedbigd = parseInt(document.getElementById("firedbigd").value);
  var Firedsmalld;
  Firedsmalld = parseInt(document.getElementById("firedsmalld").value);
  var Firedskulld;
  Firedskulld = parseInt(document.getElementById("firedskulld").value);

  var Waterbig;
  Waterbig = parseInt(document.getElementById("waterbig").value);
  var Watersmall;
  Watersmall = parseInt(document.getElementById("watersmall").value);
  var Waterskull;
  Waterskull = parseInt(document.getElementById("waterskull").value);

  var Waterdbigd;
  Waterdbigd = parseInt(document.getElementById("waterdbigd").value);
  var Waterdsmalld;
  Waterdsmalld = parseInt(document.getElementById("waterdsmalld").value);
  var Waterdskulld;
  Waterdskulld = parseInt(document.getElementById("waterdskulld").value);

  var Shadowbig;
  Shadowbig = parseInt(document.getElementById("shadowbig").value);
  var Shadowsmall;
  Shadowsmall = parseInt(document.getElementById("shadowsmall").value);
  var Shadowskull;
  Shadowskull = parseInt(document.getElementById("shadowskull").value);

  var Shadowdbigd;
  Shadowdbigd = parseInt(document.getElementById("shadowdbigd").value);
  var Shadowdsmalld;
  Shadowdsmalld = parseInt(document.getElementById("shadowdsmalld").value);
  var Shadowdskulld;
  Shadowdskulld = parseInt(document.getElementById("shadowdskulld").value);

  var Spiritbig;
  Spiritbig = parseInt(document.getElementById("spiritbig").value);
  var Spiritsmall;
  Spiritsmall = parseInt(document.getElementById("spiritsmall").value);
  var Spiritskull;
  Spiritskull = parseInt(document.getElementById("spiritskull").value);

  var Spiritdbigd;
  Spiritdbigd = parseInt(document.getElementById("spiritdbigd").value);
  var Spiritdsmalld;
  Spiritdsmalld = parseInt(document.getElementById("spiritdsmalld").value);
  var Spiritdskulld;
  Spiritdskulld = parseInt(document.getElementById("spiritdskulld").value);

  var Botwbig;
  Botwbig = parseInt(document.getElementById("botwbig").value);
  var Botwsmall;
  Botwsmall = parseInt(document.getElementById("botwsmall").value);
  var Botwskull;
  Botwskull = parseInt(document.getElementById("botwskull").value);

  var Botwdbigd;
  Botwdbigd = parseInt(document.getElementById("botwdbigd").value);
  var Botwdsmalld;
  Botwdsmalld = parseInt(document.getElementById("botwdsmalld").value);
  var Botwdskulld;
  Botwdskulld = parseInt(document.getElementById("botwdskulld").value);

  var Icbig;
  Icbig = parseInt(document.getElementById("icbig").value);
  var Icsmall;
  Icsmall = parseInt(document.getElementById("icsmall").value);
  var Icskull;
  Icskull = parseInt(document.getElementById("icskull").value);

  var Icdbigd;
  Icdbigd = parseInt(document.getElementById("icdbigd").value);
  var Icdsmalld;
  Icdsmalld = parseInt(document.getElementById("icdsmalld").value);
  var Icdskulld;
  Icdskulld = parseInt(document.getElementById("icdskulld").value);

  var Gtgbig;
  Gtgbig = parseInt(document.getElementById("gtgbig").value);
  var Gtgsmall;
  Gtgsmall = parseInt(document.getElementById("gtgsmall").value);
  var Gtgskull;
  Gtgskull = parseInt(document.getElementById("gtgskull").value);

  var Gtgdbigd;
  Gtgdbigd = parseInt(document.getElementById("gtgdbigd").value);
  var Gtgdsmalld;
  Gtgdsmalld = parseInt(document.getElementById("gtgdsmalld").value);
  var Gtgdskulld;
  Gtgdskulld = parseInt(document.getElementById("gtgdskulld").value);

  var Ganonsbig;
  Ganonsbig = parseInt(document.getElementById("ganonsbig").value);
  var Ganonssmall;
  Ganonssmall = parseInt(document.getElementById("ganonssmall").value);
  var Ganonsskull;
  Ganonsskull = parseInt(document.getElementById("ganonsskull").value);

  var Ganonsdbigd;
  Ganonsdbigd = parseInt(document.getElementById("ganonsdbigd").value);
  var Ganonsdsmalld;
  Ganonsdsmalld = parseInt(document.getElementById("ganonsdsmalld").value);
  var Ganonsdskulld;
  Ganonsdskulld = parseInt(document.getElementById("ganonsdskulld").value);

  if (Dekudbigd + Dekudsmalld + Dekudskulld === 0) {
    document.getElementById("dekurows").style.display = "table-row";
  } else {}

  if (Dcdbigd + Dcdsmalld + Dcdskulld === 0) {
    document.getElementById("dcrows").style.display = "table-row";
  } else {}

  if (Jabudbigd + Jabudsmalld + Jabudskulld === 0) {
    document.getElementById("jaburows").style.display = "table-row";
  } else {}

  if (Forestdbigd + Forestdsmalld + Forestdskulld === 0) {
    document.getElementById("forestrows").style.display = "table-row";
  } else {}

  if (Firedbigd + Firedsmalld + Firedskulld === 0) {
    document.getElementById("firerows").style.display = "table-row";
  } else {}

  if (Waterdbigd + Waterdsmalld + Waterdskulld === 0) {
    document.getElementById("waterrows").style.display = "table-row";
  } else {}

  if (Shadowdbigd + Shadowdsmalld + Shadowdskulld === 0) {
    document.getElementById("shadowrows").style.display = "table-row";
  } else {}

  if (Spiritdbigd + Spiritdsmalld + Spiritdskulld === 0) {
    document.getElementById("spiritrows").style.display = "table-row";
  } else {}

  if (Botwdbigd + Botwdsmalld + Botwdskulld === 0) {
    document.getElementById("botwrows").style.display = "table-row";
  } else {}

  if (Icdbigd + Icdsmalld + Icdskulld === 0) {
    document.getElementById("icrows").style.display = "table-row";
  } else {}

  if (Gtgdbigd + Gtgdsmalld + Gtgdskulld === 0) {
    document.getElementById("gtgrows").style.display = "table-row";
  } else {}

  if (Ganonsdbigd + Ganonsdsmalld + Ganonsdskulld === 0) {
    document.getElementById("ganonsrows").style.display = "table-row";
  } else {}

}

function clearrows(){
  var Dekubig;
  Dekubig = parseInt(document.getElementById("dekubig").value ||0);
  var Dekusmall;
  Dekusmall = parseInt(document.getElementById("dekusmall").value ||0);
  var Dekuskull;
  Dekuskull = parseInt(document.getElementById("dekuskull").value ||0);

  var Dekudbigd;
  Dekudbigd = parseInt(document.getElementById("dekudbigd").value ||0);
  var Dekudsmalld;
  Dekudsmalld = parseInt(document.getElementById("dekudsmalld").value ||0);
  var Dekudskulld;
  Dekudskulld = parseInt(document.getElementById("dekudskulld").value ||0);

  var Dcbig;
  Dcbig = parseInt(document.getElementById("dcbig").value ||0);
  var Dcsmall;
  Dcsmall = parseInt(document.getElementById("dcsmall").value ||0);
  var Dcskull;
  Dcskull = parseInt(document.getElementById("dcskull").value ||0);

  var Dcdbigd;
  Dcdbigd = parseInt(document.getElementById("dcdbigd").value ||0);
  var Dcdsmalld;
  Dcdsmalld = parseInt(document.getElementById("dcdsmalld").value ||0);
  var Dcdskulld;
  Dcdskulld = parseInt(document.getElementById("dcdskulld").value ||0);

  var Jabubig;
  Jabubig = parseInt(document.getElementById("jabubig").value ||0);
  var Jabusmall;
  Jabusmall = parseInt(document.getElementById("jabusmall").value ||0);
  var Jabuskull;
  Jabuskull = parseInt(document.getElementById("jabuskull").value ||0);

  var Jabudbigd;
  Jabudbigd = parseInt(document.getElementById("jabudbigd").value ||0);
  var Jabudsmalld;
  Jabudsmalld = parseInt(document.getElementById("jabudsmalld").value ||0);
  var Jabudskulld;
  Jabudskulld = parseInt(document.getElementById("jabudskulld").value ||0);

  var Forestbig;
  Forestbig = parseInt(document.getElementById("forestbig").value ||0);
  var Forestsmall;
  Forestsmall = parseInt(document.getElementById("forestsmall").value ||0);
  var Forestskull;
  Forestskull = parseInt(document.getElementById("forestskull").value ||0);

  var Forestdbigd;
  Forestdbigd = parseInt(document.getElementById("forestdbigd").value ||0);
  var Forestdsmalld;
  Forestdsmalld = parseInt(document.getElementById("forestdsmalld").value ||0);
  var Forestdskulld;
  Forestdskulld = parseInt(document.getElementById("forestdskulld").value ||0);

  var Firebig;
  Firebig = parseInt(document.getElementById("firebig").value ||0);
  var Firesmall;
  Firesmall = parseInt(document.getElementById("firesmall").value ||0);
  var Fireskull;
  Fireskull = parseInt(document.getElementById("fireskull").value ||0);

  var Firedbigd;
  Firedbigd = parseInt(document.getElementById("firedbigd").value ||0);
  var Firedsmalld;
  Firedsmalld = parseInt(document.getElementById("firedsmalld").value ||0);
  var Firedskulld;
  Firedskulld = parseInt(document.getElementById("firedskulld").value ||0);

  var Waterbig;
  Waterbig = parseInt(document.getElementById("waterbig").value ||0);
  var Watersmall;
  Watersmall = parseInt(document.getElementById("watersmall").value ||0);
  var Waterskull;
  Waterskull = parseInt(document.getElementById("waterskull").value ||0);

  var Waterdbigd;
  Waterdbigd = parseInt(document.getElementById("waterdbigd").value ||0);
  var Waterdsmalld;
  Waterdsmalld = parseInt(document.getElementById("waterdsmalld").value ||0);
  var Waterdskulld;
  Waterdskulld = parseInt(document.getElementById("waterdskulld").value ||0);

  var Shadowbig;
  Shadowbig = parseInt(document.getElementById("shadowbig").value ||0);
  var Shadowsmall;
  Shadowsmall = parseInt(document.getElementById("shadowsmall").value ||0);
  var Shadowskull;
  Shadowskull = parseInt(document.getElementById("shadowskull").value ||0);

  var Shadowdbigd;
  Shadowdbigd = parseInt(document.getElementById("shadowdbigd").value ||0);
  var Shadowdsmalld;
  Shadowdsmalld = parseInt(document.getElementById("shadowdsmalld").value ||0);
  var Shadowdskulld;
  Shadowdskulld = parseInt(document.getElementById("shadowdskulld").value ||0);

  var Spiritbig;
  Spiritbig = parseInt(document.getElementById("spiritbig").value ||0);
  var Spiritsmall;
  Spiritsmall = parseInt(document.getElementById("spiritsmall").value ||0);
  var Spiritskull;
  Spiritskull = parseInt(document.getElementById("spiritskull").value ||0);

  var Spiritdbigd;
  Spiritdbigd = parseInt(document.getElementById("spiritdbigd").value ||0);
  var Spiritdsmalld;
  Spiritdsmalld = parseInt(document.getElementById("spiritdsmalld").value ||0);
  var Spiritdskulld;
  Spiritdskulld = parseInt(document.getElementById("spiritdskulld").value ||0);

  var Botwbig;
  Botwbig = parseInt(document.getElementById("botwbig").value ||0);
  var Botwsmall;
  Botwsmall = parseInt(document.getElementById("botwsmall").value ||0);
  var Botwskull;
  Botwskull = parseInt(document.getElementById("botwskull").value ||0);

  var Botwdbigd;
  Botwdbigd = parseInt(document.getElementById("botwdbigd").value ||0);
  var Botwdsmalld;
  Botwdsmalld = parseInt(document.getElementById("botwdsmalld").value ||0);
  var Botwdskulld;
  Botwdskulld = parseInt(document.getElementById("botwdskulld").value ||0);

  var Icbig;
  Icbig = parseInt(document.getElementById("icbig").value ||0);
  var Icsmall;
  Icsmall = parseInt(document.getElementById("icsmall").value ||0);
  var Icskull;
  Icskull = parseInt(document.getElementById("icskull").value ||0);

  var Icdbigd;
  Icdbigd = parseInt(document.getElementById("icdbigd").value ||0);
  var Icdsmalld;
  Icdsmalld = parseInt(document.getElementById("icdsmalld").value ||0);
  var Icdskulld;
  Icdskulld = parseInt(document.getElementById("icdskulld").value ||0);

  var Gtgbig;
  Gtgbig = parseInt(document.getElementById("gtgbig").value ||0);
  var Gtgsmall;
  Gtgsmall = parseInt(document.getElementById("gtgsmall").value ||0);
  var Gtgskull;
  Gtgskull = parseInt(document.getElementById("gtgskull").value ||0);

  var Gtgdbigd;
  Gtgdbigd = parseInt(document.getElementById("gtgdbigd").value ||0);
  var Gtgdsmalld;
  Gtgdsmalld = parseInt(document.getElementById("gtgdsmalld").value ||0);
  var Gtgdskulld;
  Gtgdskulld = parseInt(document.getElementById("gtgdskulld").value ||0);

  var Ganonsbig;
  Ganonsbig = parseInt(document.getElementById("ganonsbig").value ||0);
  var Ganonssmall;
  Ganonssmall = parseInt(document.getElementById("ganonssmall").value ||0);
  var Ganonsskull;
  Ganonsskull = parseInt(document.getElementById("ganonsskull").value ||0);

  var Ganonsdbigd;
  Ganonsdbigd = parseInt(document.getElementById("ganonsdbigd").value ||0);
  var Ganonsdsmalld;
  Ganonsdsmalld = parseInt(document.getElementById("ganonsdsmalld").value ||0);
  var Ganonsdskulld;
  Ganonsdskulld = parseInt(document.getElementById("ganonsdskulld").value ||0);
 document.getElementById("dekubig").value = 0;
  document.getElementById("dekudbigd").value = 0;
  document.getElementById("dekusmall").value = 0;
   document.getElementById("dekudsmalld").value = 0;
  document.getElementById("dekuskull").value = 0;
  document.getElementById("dekudskulld").value = 0;
 document.getElementById("dcbig").value = 0;
  document.getElementById("dcdbigd").value = 0;
  document.getElementById("dcsmall").value = 0;
    document.getElementById("dcdsmalld").value = 0;
  document.getElementById("dcskull").value = 0;
 document.getElementById("dcdskulld").value = 0;
 document.getElementById("jabubig").value = 0;
  document.getElementById("jabudbigd").value = 0;
   document.getElementById("jabusmall").value = 0;
    document.getElementById("jabudsmalld").value = 0;
     document.getElementById("jabuskull").value = 0;
      document.getElementById("jabudskulld").value = 0;
document.getElementById("forestbig").value = 0;
 document.getElementById("forestdbigd").value = 0;
 document.getElementById("forestsmall").value = 0;
   document.getElementById("forestdsmalld").value = 0;
 document.getElementById("forestskull").value = 0;
   document.getElementById("forestdskulld").value = 0;
 document.getElementById("firebig").value = 0;
  document.getElementById("firedbigd").value = 0;
 document.getElementById("firesmall").value = 0;
  document.getElementById("firedsmalld").value = 0;
  document.getElementById("fireskull").value = 0;
document.getElementById("firedskulld").value = 0;
  document.getElementById("waterbig").value = 0;
   document.getElementById("waterdbigd").value = 0;
  document.getElementById("watersmall").value = 0;
 document.getElementById("waterdsmalld").value = 0;
  document.getElementById("waterskull").value = 0;
   document.getElementById("waterdskulld").value = 0;
   document.getElementById("shadowbig").value = 0;
  document.getElementById("shadowdbigd").value = 0;
document.getElementById("shadowsmall").value = 0;
  document.getElementById("shadowdsmalld").value = 0;
document.getElementById("shadowskull").value = 0;
  document.getElementById("shadowdskulld").value = 0;
document.getElementById("spiritbig").value = 0;
  document.getElementById("spiritdbigd").value = 0;
 document.getElementById("spiritsmall").value = 0;
  document.getElementById("spiritdsmalld").value = 0;
 document.getElementById("spiritskull").value = 0;
   document.getElementById("spiritdskulld").value = 0;
 document.getElementById("botwbig").value = 0;
 document.getElementById("botwdbigd").value = 0;
  document.getElementById("botwsmall").value = 0;
  document.getElementById("botwdsmalld").value = 0;
document.getElementById("botwskull").value = 0;
 document.getElementById("botwdskulld").value = 0;
  document.getElementById("icbig").value = 0;
  document.getElementById("icdbigd").value = 0;
  document.getElementById("icsmall").value = 0;
 document.getElementById("icdsmalld").value = 0;
 document.getElementById("icskull").value = 0;
   document.getElementById("icdskulld").value = 0;
 document.getElementById("gtgbig").value = 0;
  document.getElementById("gtgdbigd").value = 0;
 document.getElementById("gtgsmall").value = 0;
 document.getElementById("gtgdsmalld").value = 0;
 document.getElementById("gtgskull").value = 0;
  document.getElementById("gtgdskulld").value = 0;
   document.getElementById("ganonsbig").value = 0;
  document.getElementById("ganonsdbigd").value = 0;
  document.getElementById("ganonssmall").value = 0;
  document.getElementById("ganonsdsmalld").value = 0;
   document.getElementById("ganonsskull").value = 0;
 document.getElementById("ganonsdskulld").value = 0;
 dekurow();
 dcrow();
 jaburow();
 forestrow();
 firerow();
 waterrow();
 shadowrow();
 spiritrow();
 botwrow();
 icrow();
 gtgrow();
 ganonsrow();
 verticalsum();
}





// Below added by Savestate
var PLACES = {
  deku: {
    big_chests: 3,
    small_chests: 3,
    skulls: 4
  },
  dc: {
    big_chests: 3,
    small_chests: 3,
    skulls: 5
  },
  jabu: {
    big_chests: 3,
    small_chests: 0,
    skulls: 4
  },
  botw: {
    big_chests: 3,
    small_chests: 10,
    skulls: 3
  },
  forest: {
    big_chests: 4,
    small_chests: 9,
    skulls: 5
  },
  fire: {
    big_chests: 4,
    small_chests: 10,
    skulls: 5
  },
  ice_cavern: {
    big_chests: 3,
    small_chests: 0,
    skulls: 3
  },
  water: {
    big_chests: 4,
    small_chests: 6,
    skulls: 5
  },
  shadow: {
    big_chests: 4,
    small_chests: 12,
    skulls: 5
  },
  spirit: {
    big_chests: 5,
    small_chests: 14,
    skulls: 5
  },
  gtg: {
    big_chests: 1,
    small_chests: 20,
    skulls: 0
  },
  trials_tower: {
    big_chests: 2,
    small_chests: 14,
    skulls: 0
  }
};

function abc_iterator(a_amt, b_amt, c_amt, formula) {
  a_amt += 1;
  b_amt += 1;
  c_amt += 1;
  let dists = [];
  for (let a = 0; a<a_amt; a++) {
    for (let b = 0; b<b_amt; b++) {
      for (let c = 0; c<c_amt; c++) {
        if (formula(a, b, c)) {
          dists.push([a, b, c]);
        }
      }
    }
  }
  return dists;
}

function dist_generate(places, formula) {
  let dists = {};
  for (let place_name in places) {
    let place = places[place_name];
    dists[place_name] = abc_iterator(
      place.big_chests,
      place.small_chests,
      place.skulls,
      formula
    );
  }
  return dists;
}

function increment(indexes, index) {
  indexes[index].index += 1;
  if (indexes[index].index === indexes[index].length) {
    indexes[index].index = 0;
    return increment(indexes, index + 1);
  }
  return index;
}

function randint(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function shuffle(indexes) {
  for (let index in indexes) {
    indexes[index].index = randint(indexes[index].length);
  }
}

function check_22(dists, indexes) {
  let add_list = [];
  for (let i in indexes) {
    let index = indexes[i];
    let working_index = JSON.parse(JSON.stringify(dists[index.name][index.index]));
    if (add_list.length <= 0) {
      add_list = working_index;
    } else {
      for (let i = 0; i < add_list.length; i++) {
        add_list[i] += working_index[i];
      }
    }
  }
  for (let i = 0; i < add_list.length; i++) {
    if (add_list[i] != 22) // checks if final sum for each == 22
      return false;
  }
  return true;
}

function dist_print(indexes, dists) {
  for (let index in indexes) {
    console.log("  " + indexes[index].name.padStart(' ', 12) + 
    	" -> " + dists[indexes[index].name][indexes[index].index]);
  }
  console.log('-------------------');
}

function set_element_value(element_id, value) {
	document.getElementById(element_id).value = value;
}

function prefill_board(indexes, dists) {
  // hard coded garbage lol
  set_element_value('dekudbigd',   dists.deku[indexes[0].index][0]);
  set_element_value('dekudsmalld', dists.deku[indexes[0].index][1]);
  set_element_value('dekudskulld', dists.deku[indexes[0].index][2]);
  dekurow();
  set_element_value('dcdbigd',   dists.dc[indexes[1].index][0]);
  set_element_value('dcdsmalld', dists.dc[indexes[1].index][1]);
  set_element_value('dcdskulld', dists.dc[indexes[1].index][2]);
  dcrow();
  set_element_value('jabudbigd',   dists.jabu[indexes[2].index][0]);
  set_element_value('jabudsmalld', dists.jabu[indexes[2].index][1]);
  set_element_value('jabudskulld', dists.jabu[indexes[2].index][2]);
  jaburow();
  set_element_value('forestdbigd',   dists.forest[indexes[4].index][0]);
  set_element_value('forestdsmalld', dists.forest[indexes[4].index][1]);
  set_element_value('forestdskulld', dists.forest[indexes[4].index][2]);
  forestrow();
  set_element_value('firedbigd',   dists.fire[indexes[5].index][0]);
  set_element_value('firedsmalld', dists.fire[indexes[5].index][1]);
  set_element_value('firedskulld', dists.fire[indexes[5].index][2]);
  firerow();
  set_element_value('waterdbigd',   dists.water[indexes[7].index][0]);
  set_element_value('waterdsmalld', dists.water[indexes[7].index][1]);
  set_element_value('waterdskulld', dists.water[indexes[7].index][2]);
  waterrow();
  set_element_value('shadowdbigd',   dists.shadow[indexes[8].index][0]);
  set_element_value('shadowdsmalld', dists.shadow[indexes[8].index][1]);
  set_element_value('shadowdskulld', dists.shadow[indexes[8].index][2]);
  shadowrow();
  set_element_value('spiritdbigd',   dists.spirit[indexes[9].index][0]);
  set_element_value('spiritdsmalld', dists.spirit[indexes[9].index][1]);
  set_element_value('spiritdskulld', dists.spirit[indexes[9].index][2]);
  spiritrow();
  set_element_value('botwdbigd',   dists.botw[indexes[3].index][0]);
  set_element_value('botwdsmalld', dists.botw[indexes[3].index][1]);
  set_element_value('botwdskulld', dists.botw[indexes[3].index][2]);
	botwrow();
  set_element_value('icdbigd',   dists.ice_cavern[indexes[6].index][0]);
  set_element_value('icdsmalld', dists.ice_cavern[indexes[6].index][1]);
  set_element_value('icdskulld', dists.ice_cavern[indexes[6].index][2]);
  icrow();
  set_element_value('gtgdbigd',   dists.gtg[indexes[10].index][0]);
  set_element_value('gtgdsmalld', dists.gtg[indexes[10].index][1]);
  set_element_value('gtgdskulld', dists.gtg[indexes[10].index][2]);
  gtgrow();
  set_element_value('ganonsdbigd',   dists.trials_tower[indexes[11].index][0]);
  set_element_value('ganonsdsmalld', dists.trials_tower[indexes[11].index][1]);
  set_element_value('ganonsdskulld', dists.trials_tower[indexes[11].index][2]);
  ganonsrow();
  verticalsum();
}

function oot_22_full(dists) {
  let indexes = [];
  for (let place_name in dists) {
    indexes.push({
      name: place_name,
      index: 0,
      length: dists[place_name].length
    });
  }
  
  while (true) {
    if (check_22(dists, indexes)) {
      //dist_print(indexes, dists);
      prefill_board(indexes, dists);
      break;
    }
    shuffle(indexes);
  }
}

function determine_valid_abc(a, b, c, cap) {
  ////////////////////////////////////////////////////////
  // # this is the function that is being used to determine #
  // # what distributions to keep. you can probably figure  #
  // # out what's happening just by looking at it.          #
  // #                                                      #
  // # Modify it to your will or make a new one and pass    #
  // # that into the dist_generate function.                #
  // ########################################################

  // cap out at max 4 for a single result
  if (a > cap) return false;
  if (b > cap) return false;
  if (c > cap) return false;
  if (a == (b + c)) return true;
  if (b == (a + c)) return true;
  if (c == (b + a)) return true;
  return false;
}

function generate_dist_22() {
	unhiderows();
  let dists = dist_generate(
    PLACES,
    determine_valid_abc, // filtering function
    5
  );
  oot_22_full(dists);

}

