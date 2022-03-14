function distanceFromHqInBlocks(value) {
    // something that compares with 42:
    if (value > 42) {
        return (value - 42);
    } else if (value < 42) {
        return (42 - value)
    } else {
        return 0
    }
}

function distanceFromHqInFeet(value) {
    let blocks = distanceFromHqInBlocks(value);
    return (blocks * 264);
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return ((start - destination) * 264);
    } else if (start < destination) {
        return ((destination - start) * 264); 
    } else {
        return 0
    }
  }

  function calculatesFarePrice(start, destination) {
      let value = distanceTravelledInFeet(start, destination);
      if (value < 400) {
          return 0
      } else if ((value >= 400) && (value <= 2000)) {
          return ((value - 400) * 0.02);
      } else if ((value > 2000) && (value <=2500)) {
          return 25
      } else {
          return "cannot travel that far"
      }
  }