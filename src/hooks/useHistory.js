import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popHistory, pushHistory } from 'containers/App/actions';
import { selectApp } from 'containers/App/selectors';

const useHistory = () => {
  const { history } = useSelector(selectApp);
  const dispatch = useDispatch();

  const path = useMemo(() => {
    return history.length > 0 ? history[0] : '';
  }, [history]);

  const goTo = (value) => {
    let newPath = value;
    if(newPath.substr(0, 2) === './') {
      newPath = `${path}/${newPath.substring(2)}`
    }
    if(path !== newPath) {
      dispatch(pushHistory(newPath));
    }
  }

  const goBack = () => {
    if(history.length > 1) {
      dispatch(popHistory());
    }
  }

  return {
    history,
    path,
    goTo,
    goBack
  };
}

export default useHistory;